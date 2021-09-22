import React, { FC, useState } from "react";
import classnames from "classnames";
import Icon from "../Icon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Transition from "../Transition";
import PropTypes from "prop-types";

export interface BannerItem {
  href: string;
  imgPcUrl: string;
  imgMobileUrl: string;
  imgAlt: string;
}

export interface CarouselProps {
  banners?: BannerItem[];
}

/**
 * 警示視窗，點擊右上角的x視窗消失，可以設定是否顯示X，關閉Carousel時觸發的事件。
 *
 *
 * ~~~js
 * import { Carousel } from 'claire-ui'
 *
 * ~~~
 */
export const Carousel: FC<CarouselProps> = (props) => {
  const { ...restProps } = props;

  const [index, setIndex] = React.useState(-1);
  const [data, setData] = React.useState<BannerItem[]>(null);

  const [leftArrowOpacity, setLeftArrowOpacity] = React.useState(0.5);
  const [rightArrowOpacity, setRightArrowOpacity] = React.useState(0.5);

  const Next = React.useRef(null);
  let startX: number, endX: number;

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    startX = e.touches[0].clientX;
    console.log("[ startX ]", startX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    endX = e.touches[0].clientX;
    console.log("[ endX ]", endX);
    if (startX > endX) {
      setIndex(_trn(true));
    } else if (startX < endX) {
      setIndex(_trn(false));
    }
  };
  // 輪播(核心)
  const _trn = (isAdd: boolean, value = 1) => {
    if (!data) return 0;
    const len = data.length;
    const nextIndex = index + (isAdd ? value : -value);
    if (nextIndex >= len) {
      return 0;
    } else if (nextIndex < 0) {
      return len - 1;
    }
    return nextIndex;
  };

  const nextIndex = (isAdd: boolean) => {
    let nextIndex: number;
    if (nextIndex < 0) nextIndex = data.length - 1;
    else if (nextIndex > data.length) nextIndex = 0;
    else nextIndex = index + (isAdd ? 1 : -1);
    return nextIndex;
  };

  // //初始輪播功能
  // const _intervalInit = () => {
  //   if (timer) {
  //     //異步才能實現初始過渡效果
  //     setTimeout(() => {
  //       setIndex(0);
  //     }, 1);
  //     //開啟讓state改變
  //     setTimeout(() => {
  //       Next.current && Next.current.click();
  //     }, 5000);
  //   }
  // };
  // React.useEffect(() => {
  //   setData(urls);
  //   _intervalInit();
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // React.useEffect(() => {
  //   clearInterval(interval);
  //   interval = setInterval(() => {
  //     Next.current && Next.current.click();
  //   }, 5000);
  // }, [Index]);

  return (
    <div className="carousel-container">
      <Transition timeout={2000}>
        <a href={data[index].href}>
          <div className="img-container"></div>
        </a>
      </Transition>
      <div className="left-btn"></div>
      <div className="right-btn"></div>
      <div className="nav-list"></div>
    </div>
  );
};

Carousel.defaultProps = {
  banners: [
    {
      href:
        "https://www.google.com/search?q=%E5%9C%96%E7%89%87&rlz=1C1GCEU_zh-TWTW964TW964&sxsrf=AOaemvJmtRdsIyXbRp_-d8MqobLS1-KhGw:1631866761389&tbm=isch&source=iu&ictx=1&fir=ZAWr6OdQEBk5pM%252C7MogqoBzlOjZ-M%252C_&vet=1&usg=AI4_-kTX639vsU2-EfSn-stP6qXqIvAkvQ&sa=X&ved=2ahUKEwiDgIi1yYXzAhUUxpQKHYmZDbMQ9QF6BAgUEAE&biw=1280&bih=587&dpr=1.5#imgrc=ZAWr6OdQEBk5pM",
      imgPcUrl:
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi1.kknews.cc%2FSIG%3D1pp30fg%2Fctp-vzntr%2F37ps6r6qsp114rss99503s2oqo600548.jpg&imgrefurl=https%3A%2F%2Fkknews.cc%2Fcareer%2Fkl8r9lr.html&tbnid=cHwsaKdM9P0OpM&vet=12ahUKEwj26-u1yYXzAhVWAN4KHcQ-BYkQMygCegUIARCPAQ..i&docid=HQ21aoat547IRM&w=240&h=240&q=%E5%9C%96%E7%89%87&ved=2ahUKEwj26-u1yYXzAhVWAN4KHcQ-BYkQMygCegUIARCPAQ",
      imgMobileUrl:
        "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwordpress.bestdaylong.com%2Fwp-content%2Fuploads%2F2019%2F07%2F%25E7%258E%2589%25E5%2585%258D%25E5%2590%2583%25E6%259C%2588%25E9%25A4%2585.jpg&imgrefurl=http%3A%2F%2Fwordpress.bestdaylong.com%2Fblog%2Farchives%2F21741&tbnid=ZAWr6OdQEBk5pM&vet=12ahUKEwj26-u1yYXzAhVWAN4KHcQ-BYkQMygAegUIARCLAQ..i&docid=7MogqoBzlOjZ-M&w=791&h=627&q=%E5%9C%96%E7%89%87&ved=2ahUKEwj26-u1yYXzAhVWAN4KHcQ-BYkQMygAegUIARCLAQ",
      imgAlt: "string",
    },
  ],
};

export default Carousel;
