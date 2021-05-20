import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Alert from "./alert";

const defaultAlert = () => {
  return <Alert title="this is alert!"></Alert>;
};

const stylesAlert = () => {
  return (
    <>
      <Alert title="this is Success" alertType="success"></Alert>
      <Alert title="this is Danger!" alertType="danger"></Alert>
      <Alert
        title="this is Warning!"
        alertType="warning"
        closable={false}
      ></Alert>
    </>
  );
};
const descAlert = () => {
  return (
    <Alert
      title="title"
      description="this is a long description"
      onClose={action("closed")}
    ></Alert>
  );
};
storiesOf("Alert", module)
  .add("Alert", defaultAlert)
  .add("不同樣式的 Alert", stylesAlert)
  .add("添加描述的 Alert", descAlert);
