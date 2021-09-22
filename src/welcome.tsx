import React, { useEffect, FC } from "react";
const loadFBChatPlugin = () => {
  var chatbox = document.getElementById("fb-customer-chat");
  // @ts-ignore
  chatbox.setAttribute("page_id", "684709001634740");
  // @ts-ignore
  chatbox.setAttribute("attribution", "biz_inbox");
  // @ts-ignore
  window.fbAsyncInit = function () {
    // @ts-ignore
    FB.init({
      xfbml: true,
      version: "v11.0",
    });
  };
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    // @ts-ignore
    js.src = "https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js";
    // @ts-ignore
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
};

/**
 # 歡迎來到claire-ui組件庫
        
本組件庫有前端開發能用得到的組件，特色是提供了豐富的回調函數供使用。
以下簡單介紹
* Upload-點擊或者拖曳上傳文件，支持各操作階段的回調函數。
* AutoComplete-輸入框需要自動完成時使用，支持鍵盤操作、支持同步數組和異步Promise兩種資料來源、可以自定義下拉選單樣式、並支持input HTML標籤的所有屬性。
* Select-支持複選的下拉式選單。
* Menu-支持縱向與橫向。
        
### 安裝試試

~~~javascript
npm install claire-ui
~~~

### 使用

~~~javascript
// 加載樣式
import 'claire-ui/dist/index.css'
// 引入組件
import { Button } from 'claire-ui'
~~~
 *
 * ~~~
 */
export const Welcome: FC = () => {
  useEffect(() => {
    loadFBChatPlugin();
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>)
    </>
  );
};
