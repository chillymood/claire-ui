import React, { FC, useState, createContext, CSSProperties } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  /**默認 active 的菜單項的索引值 */
  defaultIndex?: string;
  className?: string;
  /**菜單類型 横向或者縱向 */
  mode?: MenuMode;
  style?: CSSProperties;
  /**點擊菜單會觸發的回調函數 */
  onSelect?: (selectedIndex: string) => void;
  /**設置子菜單的默認打開 只在縱向模式下生效 */
  defaultOpenSubMenus?: string[];
}
interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: "0" });
/**
 * 為網站提供導航功能的菜單，支持橫向縱向兩種模式，可以使用 Menu.Item 和 Menu.Submenu 訪問選項和子下拉菜單組件
 * ~~~js
 * import { Menu } from 'claire-ui'
 *
 * ~~~
 */
export const Menu: FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  debugger;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };

  const r = renderChildren();
  console.log("r :>> ", r);

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: "0",
  mode: "horizontal",
  defaultOpenSubMenus: [],
};

export default Menu;
