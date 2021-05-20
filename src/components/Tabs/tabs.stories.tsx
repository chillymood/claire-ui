import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Tabs from "./tabs";
import TabItem from "./tabItem";
import Icon from "../Icon";
const defaultTabs = () => (
  <Tabs onSelect={action("selected")}>
    <TabItem label="選項卡一">this is content one</TabItem>
    <TabItem label="選項卡二">this is content two</TabItem>
    <TabItem label="用戶管理">this is content three</TabItem>
  </Tabs>
);

const cardTabs = () => (
  <Tabs onSelect={action("selected")} type="card">
    <TabItem label="card1">this is card one</TabItem>
    <TabItem label="card2">this is content two</TabItem>
    <TabItem label="disabled" disabled>
      this is content three
    </TabItem>
  </Tabs>
);

const customTabs = () => (
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
storiesOf("Tabs", module)
  .add("Tabs", defaultTabs)
  .add("選項卡樣式的Tabs", cardTabs)
  .add("自定義選項卡樣式", customTabs);
