import React from "react";
import { Story, Meta } from "@storybook/react";
import { Welcome } from "./welcome";

// import welcomeText from "./welcomeText.mdx";

const markdownText = `

# 歡迎來到claire-ui組件庫
        
本組件庫含有各種前端開發能用得到的組件，提供了豐富的回調函數供使用。
以下簡述幾個亮點
* Upload-支持拖曳上傳、上傳前檢查、異步獲取數據。
* AutoComplete-支持異步獲取數據、自定義下拉選項模板。
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
`;

// storiesOf("Welcome page", module).add(
//   "welcome",
//   () => {
//     return (
//       <>
//         {/* <h1>歡迎來到claire-ui組件庫</h1>
//         <p>
//           本組件庫含有各種前端開發用得到的組件、除了基本的menu選單、select下拉式組件、AutoComplete自動完成組件以外，比較有趣的還有Upload支持拖動的檔案上傳，組件內都提供了豐富的回調函數供使用，歡迎多加利用。
//         </p> */}
//       </>
//     );
//   },
//   { info: { text: markdownText, source: false } }
// );

const text = () => markdownText;
// <div>
//   <h1>歡迎來到claire-ui組件庫</h1>
//   <p>
//     本組件庫含有各種前端開發用得到的組件、除了基本的menu選單、select下拉式組件、AutoComplete自動完成組件以外，比較有趣的還有Upload支持拖動的檔案上傳，組件內都提供了豐富的回調函數供使用，歡迎多加利用。
//   </p>
// </div>

export default {
  title: "Welcome page",
  parameters: {
    docs: {
      page: markdownText,
    },
  decorators: [
    // (Story) => (
    //   <div style={{ margin: "3em" }}>
    //     <div>
    //       <h1>歡迎來到claire-ui組件庫</h1>
    //       <p>
    //         本組件庫含有各種前端開發用得到的組件、除了基本的menu選單、select下拉式組件、AutoComplete自動完成組件以外，比較有趣的還有Upload支持拖動的檔案上傳，組件內都提供了豐富的回調函數供使用，歡迎多加利用。
    //       </p>
    //     </div>
    //     <Story />
    //   </div>
    // ),
    
  ]
} as Meta;

// const Template: Story = (args) => text();

// export const Primary = Template.bind({});
