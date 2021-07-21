import React from "react";

import { AppWrapp, AppColumn } from "./AppStyled";
import ChatBoard from "./components/ChatBoard";
import Preview from "./components/Preview";

const App = () => {
  return (
    <AppWrapp>
      <AppColumn>
        <Preview />
      </AppColumn>
      <AppColumn>
        <ChatBoard />
      </AppColumn>
    </AppWrapp>
  );
};

export default App;
