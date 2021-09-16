import React, {
  FC,
  FunctionComponentElement,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  useState,
} from "react";
import classnames from "classnames";
import Icon from "../Icon";
import { TabItemProps } from "./tabItem";

export interface TabsProps {
  /**當前激活 tab 面板的 index，默認为0 */
  defaultIndex?: number;
  className?: string;
  /**點擊 Tab 觸發的回調函数 */
  onSelect?: (selectedIndex: number) => void;
  /**Tabs的样式，兩種可選，默認為 line */
  type?: "line" | "card";
}

/**
 * 題供區塊展示內容，支持自定義圖標。
 *
 * ~~~js
 * import { Tabs , TabItem } from 'claire-ui'
 * ~~~
 */

export const Tabs: FC<TabsProps> = (props) => {
  const {
    defaultIndex,
    className,
    onSelect,
    type,
    children,
    ...restProps
  } = props;

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const navClass = classnames("tabs-nav", { [`nav-${type}`]: type });

  const handleClick = (idx: number) => {
    setActiveIndex(idx);
  };

  //將<Tabs中間的元素渲染成二塊代碼>
  const renderNavlinks = () => {
    //將<Tabs>中包含的內容children轉成<li>的元素
    return React.Children.map(children, (child, idx) => {
      const childElement = child as FunctionComponentElement<TabItemProps>;
      const { label, disabled } = childElement.props;
      const classes = classnames("tabs-nav-item", {
        "is-active": idx === activeIndex,
        disabled,
      });
      return (
        <li className={classes} key={idx} onClick={() => handleClick(idx)}>
          {label}
        </li>
      );
    });
  };

  //渲染選中的的內容
  const renderContent = () => {
    return React.Children.map(children, (child, idx) => {
      if (idx === activeIndex) {
        return child;
      }
    });
  };

  return (
    <div className={`tabs ${className}`}>
      <ul className={navClass}>{renderNavlinks()}</ul>
      <div className="tabs-content">{renderContent()}</div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: "line",
  className: "iamclassname",
};

export default Tabs;
