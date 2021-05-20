import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./icon";
import Button from "../Button";

const markdownText = `
提供了一套常用的圖標集合 基于 react-fontawesome。
 
 支持 react-fontawesome的所有属性 可以在這查询 https://github.com/FortAwesome/react-fontawesome#basic
 
 支持 fontawesome 所有 free-solid-icons，可以在這裡查看所有圖標 https://fontawesome.com/icons?d=gallery&s=solid&m=free
 ### 引用方法

~~~javascript
import { Icon } from 'claire-ui'
~~~
`;

const defaultIcons = () => (
  <>
    <Icon icon="check" size="3x" />
    <Icon icon="times" size="3x" />
    <Icon icon="anchor" size="3x" />
    <Icon icon="trash" size="3x" />
    {/* <Button size="lg" btnType="primary">
      <Icon icon="check" /> check{" "}
    </Button> */}
  </>
);

const themeIcons = () => (
  <>
    <Icon icon="check" size="3x" theme="success" />
    <Icon icon="times" size="3x" theme="danger" />
    <Icon icon="anchor" size="3x" theme="primary" />
    <Icon icon="exclamation-circle" size="3x" theme="warning" />
  </>
);

const customIcons = () => (
  <>
    <Icon icon="spinner" size="3x" theme="primary" spin />
    <Icon icon="spinner" size="3x" theme="success" pulse />
  </>
);

storiesOf("Icon", module)
  .add("Icon", defaultIcons, { info: { text: markdownText } })
  .add("不同主题的 Icon", themeIcons, { info: { text: markdownText } })
  .add("更多行為的 Icon", customIcons, {
    info: {
      text: "更多範例請參考：https://github.com/FortAwesome/react-fontawesome#basic",
    },
  });
