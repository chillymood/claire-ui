import React, { FC, useContext } from "react";
import classNames from "classnames";
import Icon from "../Icon";
import { SelectContext } from "./select";
export interface SelectOptionProps {
  index?: string;
  /** 默認根據此属性值進行篩選，該值不能相同*/
  value: string;
  /** 選項的標籤，若不設置则默認與 value 相同*/
  label?: string;
  /** 是否禁用該選項*/
  disabled?: boolean;
}

export const Option: FC<SelectOptionProps> = ({
  value,
  label,
  disabled,
  children,
  index,
}) => {
  const { onSelect, selectedValues, multiple } = useContext(SelectContext);
  const isSelected = selectedValues.includes(value);
  const classes = classNames("select-item", {
    "is-disabled": disabled,
    "is-selected": isSelected,
  });
  const handleClick = (
    e: React.MouseEvent,
    value: string,
    isSelected: boolean
  ) => {
    e.preventDefault();
    if (onSelect && !disabled) {
      onSelect(value, isSelected);
    }
  };
  return (
    <li
      key={index}
      className={classes}
      onClick={(e) => {
        handleClick(e, value, isSelected);
      }}
    >
      {children || (label ? label : value)}
      {multiple && isSelected && <Icon icon="check" />}
    </li>
  );
};

Option.displayName = "Option";

export default Option;
