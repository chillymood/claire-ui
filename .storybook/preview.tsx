// import { addDecorator, addParameters } from "@storybook/react";
// import { withInfo } from "@storybook/addon-info";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../src/styles/index.scss";

library.add(fas);
const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
};

// const storyWrapper = (stroyFn: any) => (
//   <div style={wrapperStyle}>
//     <h3>組件演示</h3>
//     {stroyFn()}
//   </div>
// );
// addDecorator(storyWrapper);
// addDecorator(withInfo);
// addParameters({ info: { inline: true, header: false } });

export const decorators = [
  (Story) => (
    <div style={wrapperStyle}>
      {/* <h3>Component display</h3> */}
      <Story />
    </div>
  ),
];
