import React from "react";
import { Story, Meta } from "@storybook/react";
import Icon, { IconProps } from "./icon";
import Button from "../Button";

const customIcons = (args: IconProps) => (
  <>
    <Icon {...args} theme="primary" spin />
  </>
);

export default {
  title: "Components/Icon",
  component: Icon,
  args: {
    icon: "spinner",
    size: "3x",
  },
} as Meta;

const Template: Story<IconProps> = (args) => customIcons(args);

export const Primary = Template.bind({});

const markdownText = `
提供了一套常用的圖標集合 基于 react-fontawesome。
 
 支持 react-fontawesome的所有属性 可以在這查询 https://github.com/FortAwesome/react-fontawesome#basic
 
 支持 fontawesome 所有 free-solid-icons，可以在這裡查看所有圖標 https://fontawesome.com/icons?d=gallery&s=solid&m=free
 ### 引用方法

~~~javascript
import { Icon } from 'claire-ui'
~~~
`;

export const themeIcons = () => (
  <>
    <Icon icon="check" size="3x" theme="success" />
    <Icon icon="times" size="3x" theme="danger" />
    <Icon icon="anchor" size="3x" theme="primary" />
    <Icon icon="exclamation-circle" size="3x" theme="warning" />
  </>
);

export const defaultIcons = () => (
  <>
    <Icon icon="check" size="3x" />
    <Icon icon="times" size="3x" />
    <Icon icon="anchor" size="3x" />
    <Icon icon="trash" size="3x" />
  </>
);
