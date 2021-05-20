import React, { FC } from "react";

export interface TabItemProps {
  /**Tab選項上面的文字或樣式*/
  label: string | React.ReactElement;
  /**Tab選項是否被禁用*/
  disabled?: boolean;
}

const TabItem: FC<TabItemProps> = ({ children }) => {
  return <div className="tab-panel">{children}</div>;
};

export default TabItem;
