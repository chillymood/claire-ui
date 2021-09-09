import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Alert, { AlertProps } from "./alert";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  alertType: "default",
  closable: true,
  title: "我是標題",
  description: "我是描述",
  onClose: action("我按了關閉"),
};

export const StylesAlert = Template.bind({});

StylesAlert.args = {
  ...Primary.args,
  alertType: "warning",
  closable: false,
};
