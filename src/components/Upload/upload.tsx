import React, { FC, useRef, ChangeEvent, useState } from "react";
import axios from "axios";
import UploadList from "./uploadList";
import Dragger from "./dragger";
export type UploadFileStatus = "ready" | "uploading" | "success" | "error";
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}
export interface UploadProps {
  /**必選參數, 上傳的地址 */
  action: string;
  /**上傳的文件列表,*/
  defaultFileList?: UploadFile[];
  /**上傳文件之前的鉤子，參數為上傳的文件，若返回 false 或者 Promise 則停止上傳。 */
  //提供給用戶驗證使用
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /**文件上傳時的鉤子 */
  onProgress?: (percentage: number, file: UploadFile) => void;
  /**文件上傳成功時的鉤子 */
  onSuccess?: (data: any, file: UploadFile) => void;
  /**文件上傳失敗時的鉤子 */
  onError?: (err: any, file: UploadFile) => void;
  /**文件狀態改變時的鉤子，上傳成功或者失敗時都會被調用 */
  onChange?: (file: UploadFile) => void;
  /**文件列表移除文件時的鉤子 */
  onRemove?: (file: UploadFile) => void;
  /**設置上傳的請求頭部 */
  headers?: { [key: string]: any };
  /**上傳的文件字段名 */
  name?: string;
  /**上傳時附帶的額外參數 */
  data?: { [key: string]: any };
  /**支持發送 cookie 憑證信息 */
  withCredentials?: boolean;
  /**可選參數, 接受上傳的文件類型 */
  accept?: string;
  /**是否支持多選文件 */
  multiple?: boolean;
  /**是否支持拖曳上傳 */
  drag?: boolean;
}

/**
 * 通過點擊或者拖曳上傳文件
 * ### 引用方法
 *
 * ~~~js
 * import { Upload } from 'claire-ui'
 * ~~~
 */

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    name,
    headers,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    drag,
  } = props;
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);

  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
    //可以更新裡面所有屬性，都是可選的
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };
  const handleClick = () => {
    if (fileInput.current) {
      //按下隱藏的input
      fileInput.current.click();
    }
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + "upload-file",
      status: "ready",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList((prevList) => {
      return [_file, ...prevList];
    });
    const formData = new FormData();
    formData.append(name || "file", file);
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
        withCredentials,
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if (percentage < 100) {
            updateFileList(_file, { percent: percentage, status: "uploading" });
            _file.status = "uploading";
            _file.percent = percentage;
            if (onProgress) {
              onProgress(percentage, _file);
            }
          }
        },
      })
      .then((resp) => {
        updateFileList(_file, { status: "success", response: resp.data });
        _file.status = "success";
        _file.response = resp.data;
        if (onSuccess) {
          onSuccess(resp.data, _file);
        }
        if (onChange) {
          onChange(_file);
        }
      })
      .catch((err) => {
        updateFileList(_file, { status: "error", error: err });
        _file.status = "error";
        _file.error = err;
        if (onError) {
          onError(err, _file);
        }
        if (onChange) {
          onChange(_file);
        }
      });
  };

  return (
    <div className="upload-component">
      <div
        className="upload-input"
        style={{ display: "inline-block" }}
        onClick={handleClick}
      >
        {drag ? (
          <Dragger
            onFile={(files) => {
              uploadFiles(files);
            }}
          >
            {children}
          </Dragger>
        ) : (
          children
        )}
        <input
          className="file-input"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

Upload.defaultProps = {
  name: "file",
};
export default Upload;
