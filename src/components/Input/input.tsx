import React, {
  FC,
  ReactElement,
  InputHTMLAttributes,
  ChangeEvent,
} from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon from "../Icon/icon";

type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /**是否禁用 Input */
  disabled?: boolean;
  /**設置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加圖標，在右側懸浮添加一個圖標，用於提示 */
  icon?: IconProp;
  /**添加前缀 用於配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀 用於配置一些固定组合 */
  append?: string | ReactElement;
  /**輸入框改變觸發的回調 */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input 輸入框 通過鼠標或鍵盤輸入內容，
 * 支持 HTMLInput 的所有基本属性
 * 
 *### 引用方法
 * ~~~js
 * import { Input } from 'claire-ui'
 * ~~~
 
 */
export const Input: FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;

  const cnames = classNames("input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });
  const fixControlledValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };
  //檢查value是否存在
  if ("value" in props) {
    //移除屬性
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }
  return (
    <div className={cnames} style={style}>
      {prepend && <div className="input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="input-inner" disabled={disabled} {...restProps} />
      {append && <div className="input-group-append">{append}</div>}
    </div>
  );
};

export default Input;
