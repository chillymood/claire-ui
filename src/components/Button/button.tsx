import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  className?: string;
  /**設置 Button 的禁用 */
  disabled?: boolean;
  /**設置 Button 的尺寸 */
  size?: ButtonSize;
  /**設置 Button 的類型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 頁面中最常用的按鈕元素，適合於完成特定的交互，支持HTML按鈕和一個鏈接的所有屬性。
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'claire-ui'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href, ...restProps } =
    props;
  // btn, btn-lg, btn-primary
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;
