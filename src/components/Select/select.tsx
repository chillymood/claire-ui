import React, {
  FC,
  useState,
  createContext,
  useRef,
  FunctionComponentElement,
  useEffect,
  Ref,
  RefObject,
} from "react";
import classNames from "classnames";
import Input from "../Input";
import Icon from "../Icon";
import useClickOutside from "../../hooks/useClickOutside";
import Transition from "../Transition/transition";
import { SelectOptionProps } from "./option";

export interface SelectProps {
  /**指定默認選中的項目	 可以是字符串或者字符串數组*/
  defaultValue?: string | string[];
  /** 選擇框默認文字*/
  placeholder?: string;
  /** 是否禁用*/
  disabled?: boolean;
  /** 是否支持多選*/
  multiple?: boolean;
  /** select input 的 name 属性	 */
  name?: string;
  /**選中值發生變化时觸發 */
  onChange?: (selectedValue: string, selectedValues: string[]) => void;
  /**下拉框出现/隱藏时觸發 */
  onVisibleChange?: (visible: boolean) => void;
  Option?: any;
}

export interface ISelectContext {
  onSelect?: (value: string, isSelected?: boolean) => void;
  selectedValues: string[];
  multiple?: boolean;
}

export const SelectContext = createContext<ISelectContext>({
  selectedValues: [],
});
/**
 * 下拉選單，有單選和複選功能。
 *
 * ~~~js
 * import { Select , Option } from 'claire-ui'
 *
 * ~~~
 */
export const Select: FC<SelectProps> = (props) => {
  const {
    defaultValue,
    placeholder,
    children,
    multiple,
    name,
    disabled,
    onChange,
    onVisibleChange,
  } = props;
  const input = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLInputElement>(null);
  const containerWidth = useRef(0);
  const [selectedValues, setSelectedValues] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : []
  );
  const [menuOpen, setOpen] = useState(false);
  const [value, setValue] = useState(
    typeof defaultValue === "string" ? defaultValue : ""
  );
  const handleOptionClick = (value: string, isSelected?: boolean) => {
    //更新單選值
    if (!multiple) {
      setOpen(false);
      setValue(value);
      if (onVisibleChange) {
        onVisibleChange(false);
      }
    } else {
      setValue("");
    }
    let updatedValues = [value];
    if (multiple) {
      // 是被選中就刪掉，非選被選中就選中。
      updatedValues = isSelected
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(updatedValues);
    }
    if (onChange) {
      onChange(value, updatedValues);
    }
  };
  useEffect(() => {
    if (input.current) {
      input.current.focus();
      if (multiple && selectedValues.length > 0) {
        input.current.placeholder = "";
      } else {
        if (placeholder) input.current.placeholder = placeholder;
      }
    }
  }, [selectedValues, multiple, placeholder]);
  useEffect(() => {
    if (containerRef.current) {
      containerWidth.current = containerRef.current.getBoundingClientRect().width;
    }
  });
  useClickOutside(containerRef, () => {
    setOpen(false);
    if (onVisibleChange && menuOpen) {
      onVisibleChange(false);
    }
  });
  const passedContext: ISelectContext = {
    onSelect: handleOptionClick,
    selectedValues: selectedValues,
    multiple: multiple,
  };
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!disabled) {
      setOpen(!menuOpen);
      if (onVisibleChange) {
        onVisibleChange(!menuOpen);
      }
    }
  };
  const generateOptions = () => {
    return React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<SelectOptionProps>;
      if (childElement.type.displayName === "Option") {
        return React.cloneElement(childElement, {
          index: `select-${i}`,
        });
      } else {
        console.error(
          "Warning: Select has a child which is not a Option component"
        );
      }
    });
  };
  const containerClass = classNames("select", {
    "menu-is-open": menuOpen,
    "is-disabled": disabled,
    "is-multiple": multiple,
  });
  return (
    <div className={containerClass} ref={containerRef}>
      <div className="select-input" onClick={handleClick}>
        <Input
          placeholder={placeholder}
          value={value}
          readOnly
          icon="angle-down"
          disabled={disabled}
          name={name}
          ref={input}
        />
      </div>
      <SelectContext.Provider value={passedContext}>
        <Transition in={menuOpen} animation="zoom-in-top" timeout={300}>
          <ul className="select-dropdown">{generateOptions()}</ul>
        </Transition>
      </SelectContext.Provider>
      {multiple && (
        <div
          className="selected-tags"
          style={{ maxWidth: containerWidth.current - 32 }}
        >
          {selectedValues.map((value, index) => {
            return (
              <span className="tag" key={`tag-${index}`}>
                {value}
                <Icon
                  icon="times"
                  onClick={() => {
                    handleOptionClick(value, true);
                  }}
                />
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
Select.defaultProps = {
  name: "select",
  placeholder: "請選擇",
};
export default Select;
