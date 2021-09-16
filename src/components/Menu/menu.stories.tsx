import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu, { SubMenu } from "./index";
import { MenuProps } from "./menu";
import MenuItem, { MenuItemProps } from "./menuItem";

const defaultMenu = (args: MenuProps, menuItem: MenuItemProps) => (
  <Menu {...args} defaultIndex="0" onSelect={action("selected!")}>
    <MenuItem {...menuItem}>主選單1</MenuItem>
    <MenuItem {...menuItem}>主選單2</MenuItem>
    <MenuItem {...menuItem} disabled>
      主選單3
    </MenuItem>
    <SubMenu title="下拉選單">
      <MenuItem {...menuItem}>下拉選單1</MenuItem>
      <MenuItem {...menuItem}>下拉選單2</MenuItem>
    </SubMenu>
  </Menu>
);

export default {
  title: "Components/Menu",
  component: Menu,
  arg: {
    defaultIndex: "0",
    mode: "horizontal",
  },
} as Meta;

const TemplateMenuItem: Story<MenuItemProps> = (args) => <MenuItem {...args} />;
const PrimaryMenuItem = TemplateMenuItem.bind({});
PrimaryMenuItem.args = {};

const Template: Story<MenuProps> = (args) =>
  defaultMenu(args, PrimaryMenuItem.args as MenuItemProps);

export const Primary = Template.bind({});

const verticalMenu = () => (
  <Menu defaultIndex="0" onSelect={action("selected!")} mode="vertical">
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <SubMenu title="點擊下拉選項">
      <MenuItem>下拉選項一</MenuItem>
      <MenuItem>下拉選項二</MenuItem>
    </SubMenu>
  </Menu>
);
export const openedMenu = () => (
  <Menu
    defaultIndex="0"
    onSelect={action("selected!")}
    mode="vertical"
    defaultOpenSubMenus={["2"]}
  >
    <MenuItem>cool link</MenuItem>
    <MenuItem>cool link 2</MenuItem>
    <SubMenu title="默認展開下拉選項">
      <MenuItem>下拉選項一</MenuItem>
      <MenuItem>下拉選項二</MenuItem>
    </SubMenu>
  </Menu>
);
