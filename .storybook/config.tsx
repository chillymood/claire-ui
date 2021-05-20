import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../src/styles/index.scss";
library.add(fas);
const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
};

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>組件演示</h3>
    {stroyFn()}
  </div>
);
addDecorator(storyWrapper);
addDecorator(withInfo);
addParameters({ info: { inline: true, header: false } });
// const loaderFn = () => {
//   const allExports = [require("../src/welcome.stories.tsx")];
//   const req = require.context("../src/components", true, /\.stories\.tsx$/);
//   req.keys().forEach((fname) => allExports.push(req(fname)));
//   return allExports;
// };

const loaderFn = () => {
  return [
    require("../src/welcome.stories.tsx"),
    require("../src/components/Upload/upload.stories.tsx"),
    require("../src/components/AutoComplete/autoComplete.stories.tsx"),

    require("../src/components/Select/select.stories.tsx"),
    require("../src/components/Menu/menu.stories.tsx"),
    require("../src/components/Tabs/tabs.stories.tsx"),
    require("../src/components/Alert/alert.stories.tsx"),
    require("../src/components/Input/input.stories.tsx"),
    require("../src/components/Icon/icon.stories.tsx"),
    require("../src/components/Button/button.stories.tsx"),
  ];
};

// automatically import all files ending in *.stories.js
configure(loaderFn, module);
