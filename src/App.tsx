import React from "react";
// import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert from "./components/Alert";
import TransTabs from "./components/Tabs";
import Icon from "./components/Icon";

const App: React.FC = () => {
  return (
    <div className="App">
      <Alert alertType="success" />
      <Icon icon="angle-down" className="arrow-icon" />
      <TransTabs>
        <TransTabs.Item label="label1" disabled={false}>
          內容1
        </TransTabs.Item>
        <TransTabs.Item label="label1" disabled={false}>
          內容2
        </TransTabs.Item>
        <TransTabs.Item label="label1" disabled={true}>
          內容3
        </TransTabs.Item>
      </TransTabs>
    </div>
  );
};

export default App;
