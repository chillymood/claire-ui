import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Tabs, { TabsProps } from "./tabs";
import TabItem, { TabItemProps } from "./tabItem";
import Icon from "../Icon";

const defaultTabs = (args: TabsProps) => (
  <Tabs {...args} onSelect={action("selected")}>
    <TabItem label="Tab1">this is content one</TabItem>
    <TabItem label="Tab2">this is content two</TabItem>
    <TabItem label="Tab3">this is content three</TabItem>
  </Tabs>
);

export const cardTabs = () => (
  <Tabs onSelect={action("selected")} type="card">
    <TabItem label="card1">this is card one</TabItem>
    <TabItem label="card2">this is card two</TabItem>
    <TabItem label="disabled" disabled>
      this is content three
    </TabItem>
  </Tabs>
);

export const customTabs = () => (
  <Tabs onSelect={action("selected")} type="card">
    <TabItem
      label={
        <>
          <Icon icon="check-circle" /> 自定義圖標
        </>
      }
    >
      this is card one
    </TabItem>
    <TabItem label="tab2">this is content two</TabItem>
  </Tabs>
);
export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => defaultTabs(args);
export const Primary = Template.bind({});
