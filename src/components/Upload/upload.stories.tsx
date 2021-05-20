import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Upload } from "./upload";
import Button from "../Button/button";
import Icon from "../Icon/icon";

const simpleUpload = () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    onChange={action("changed")}
    onSuccess={action("success")}
    onProgress={action("progress")}
    onRemove={action("removed")}
  >
    <Button size="lg" btnType="primary">
      <Icon icon="upload" /> 點擊上傳{" "}
    </Button>
  </Upload>
);

const checkUpload = () => {
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert("file too big");
      return false;
    }
    return true;
  };
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action("changed")}
      beforeUpload={checkFileSize}
    >
      <Button size="lg" btnType="primary">
        <Icon icon="upload" /> 不能傳大於50Kb！
      </Button>
    </Upload>
  );
};
const textCheck = `
### 示範代碼
~~~javascript
const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too big')
    return false;
  }
  return true;
}
return (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    onChange={action('changed')}
    beforeUpload={checkFileSize}
  >
    <Button size="lg" btnType="primary"><Icon icon="upload" /> 不能傳大於50Kb！ </Button>
  </Upload>  
)
~~~
`;
const dragUpload = () => (
  <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    onChange={action("changed")}
    onRemove={action("removed")}
    name="fileName"
    multiple
    drag
  >
    <Icon icon="upload" size="5x" theme="secondary" />
    <br />
    <p>點擊或者拖動到此區域進行上傳</p>
  </Upload>
);

storiesOf("Upload", module)
  .add("Upload", simpleUpload)
  .add("上傳前檢查文件大小", checkUpload, {
    info: { source: false, text: textCheck },
  })
  .add("拖動上傳", dragUpload);
