import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input, InputProps } from "./input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: "input",
  onChange: action("changed"),
};

export const StylesInput = Template.bind({});

StylesInput.args = {
  ...Primary.args,
  placeholder: "禁用的",
  disabled: true,
};

export const IconInput = Template.bind({});

IconInput.args = {
  ...Primary.args,
  placeholder: "帶圖標的",
  icon: "search",
};

export const PrependInput = Template.bind({});

PrependInput.args = {
  ...Primary.args,
  placeholder: "帶前後綴的",
  append: ".com",
  prepend: "https:",
};
