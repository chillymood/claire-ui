import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button, { ButtonProps } from "./button";

// const defaultButton = () => (
//   <Button onClick={action("clicked")}> default button </Button>
// );

// const buttonWithSize = () => (
//   <>
//     <Button size="lg"> large button </Button>
//     <Button size="sm"> small button </Button>
//   </>
// );

// const buttonWithType = () => (
//   <>
//     <Button btnType="primary"> primary button </Button>
//     <Button btnType="danger"> danger button </Button>
//     <Button btnType="link" href="https://google.com">
//       {" "}
//       link button{" "}
//     </Button>
//   </>
// );
// storiesOf("Button", module)
//   .add("Button", defaultButton)
//   .add("不同尺寸的 Button", buttonWithSize)
//   .add("不同類型的 Button", buttonWithType);

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  size: "sm",
  children: "我是預設小按鈕",
  btnType: "default",
};

export const StylesButton = Template.bind({});

StylesButton.args = {
  ...Primary.args,
  size: "lg",
  children: "我是危險大按鈕",
  btnType: "danger",
};

export const PropertyButton = Template.bind({});

PropertyButton.args = {
  ...Primary.args,
  children: "我可以超連結和另開視窗",
  href: "https://www.typescriptlang.org/docs/handbook/utility-types.html",
  target: "_blank",
  btnType: "link",
};
