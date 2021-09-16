import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Upload, UploadProps } from "./upload";
import Button from "../Button/button";
import Icon from "../Icon/icon";
const dragUpload = (args: UploadProps) => (
  <Upload
    {...args}
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    onChange={action("changed")}
    onRemove={action("removed")}
    name="fileName"
    multiple
    drag
  >
    {/* <Icon icon="upload" size="4x" theme="danger" />
    <br /> */}
    <p style={{ paddingTop: "56px" }}>點擊或者拖動到此區域進行上傳</p>
  </Upload>
);

export default {
  title: "Components/Upload",
  component: Upload,
} as Meta;

const Template: Story<UploadProps> = (args) => dragUpload(args);
// <Upload {...args} />;

export const Primary = Template.bind({});

export const checkUpload = () => {
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
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
        不能傳大於50KB
      </Button>
    </Upload>
  );
};
