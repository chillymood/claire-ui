import React, { FC, useState } from "react";
import classnames from "classnames";
import Icon from "../Icon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Transition from "../Transition";
import PropTypes from "prop-types";

export interface AlertProps {
  /**四種可選類型針對不同場景*/
  alertType?: AlertType;
  /**標題*/
  title?: string;
  /**內容描述*/
  description?: string;
  /**關閉alert時觸發的事件*/
  onClose?: () => void;
  /**是否顯示關閉圖標*/
  closable?: boolean;
}

export type AlertType = "success" | "default" | "danger" | "warning";

/**
 * 警示視窗，點擊右上角的x視窗消失，可以設定是否顯示X，關閉Alert時觸發的事件。
 *
 *
 * ~~~js
 * import { Alert } from 'claire-ui'
 *
 * ~~~
 */
export const Alert: FC<AlertProps> = (props) => {
  const [hide, setHide] = useState(false);

  const {
    alertType,
    title,
    description,
    onClose,
    closable,
    ...restProps
  } = props;

  const classes = classnames("alert", { [`alert-${alertType}`]: alertType });
  const titleClass = classnames("alert-title", { "bold-title": description });

  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };

  return (
    <div>
      <Transition in={!hide} timeout={300} animation="zoom-in-top">
        <div className={classes}>
          <span className={titleClass}>{title}</span>
          {description && <p className="alert-desc">{description}</p>}
          {closable && (
            <span className="alert-close" onClick={handleClose}>
              <Icon icon={faTimes} />
            </span>
          )}
        </div>
      </Transition>
    </div>
  );
};

Alert.defaultProps = {
  alertType: "default",
  closable: true,
  title: "我是標題",
  description: "我是描述",
  onClose: () => {
    console.log("我按了關閉");
  },
};

export default Alert;
