import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Select, { SelectProps } from "./select";
import Option from "./option";

export const defaultSelect = (arg: SelectProps) => (
  <Select
    {...arg}
    placeholder="請選擇幾個你可能有興趣的人"
    onChange={action("changed")}
    onVisibleChange={action("visible")}
  >
    <Option value="claire" />
    <Option value="john" />
    <Option value="marry" />
    <Option value="fanny" disabled />
    <Option value="jack" />
  </Select>
);
export default {
  title: "Components/Select",
  component: Select,
  args: {
    multiple: true,
  },
} as Meta;

const Template: Story<SelectProps> = (args) => defaultSelect(args);

export const singleSelection = () => (
  <Select placeholder="只能選擇一個你最喜歡的人">
    <Option value="claire" />
    <Option value="john" />
    <Option value="marry" />
    <Option value="fanny" disabled />
    <Option value="jack" />
  </Select>
);
export const disabledSelect = () => (
  <Select placeholder="禁用啦！" disabled>
    <Option value="claire" />
    <Option value="john" />
    <Option value="marry" />
    <Option value="fanny" disabled />
    <Option value="jack" />
  </Select>
);
