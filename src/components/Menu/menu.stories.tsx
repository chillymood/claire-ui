import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./index";

export const defaultMenu = () => (
  <Menu defaultIndex="0" onSelect={action("selected!")}>
    <Menu.Item>cool link</Menu.Item>
    <Menu.Item>cool link 2</Menu.Item>
    <Menu.Item disabled>disabled</Menu.Item>
    <Menu.SubMenu title="下拉選項">
      <Menu.Item>下拉選項一</Menu.Item>
      <Menu.Item>下拉選項二</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);
export const clickMenu = () => (
  <Menu defaultIndex="0" onSelect={action("selected!")} mode="vertical">
    <Menu.Item>cool link</Menu.Item>
    <Menu.Item>cool link 2</Menu.Item>
    <Menu.SubMenu title="點擊下拉選項">
      <Menu.Item>下拉選項一</Menu.Item>
      <Menu.Item>下拉選項二</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);
export const openedMenu = () => (
  <Menu
    defaultIndex="0"
    onSelect={action("selected!")}
    mode="vertical"
    defaultOpenSubMenus={["2"]}
  >
    <Menu.Item>cool link</Menu.Item>
    <Menu.Item>cool link 2</Menu.Item>
    <Menu.SubMenu title="默認展開下拉選項">
      <Menu.Item>下拉選項一</Menu.Item>
      <Menu.Item>下拉選項二</Menu.Item>
    </Menu.SubMenu>
  </Menu>
);

storiesOf("Menu", module)
  .add("Menu", defaultMenu)
  .add("縱向的 Menu", clickMenu)
  .add("默認展開的縱向 Menu", openedMenu);
