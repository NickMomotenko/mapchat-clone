import React from "react";

import { Switch, Route } from "react-router-dom";

import { AppWrapp, AppColumn } from "./AppStyled";

import ChatBoard from "./components/ChatBoard";
import Preview from "./components/Preview";

import Login from "./pages/Login";

const App = () => {
  return (
    <Switch>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/app">
        <AppWrapp>
          <AppColumn>
            <Preview />
          </AppColumn>
          <AppColumn>
            <ChatBoard />
          </AppColumn>
        </AppWrapp>
      </Route>
    </Switch>
  );
};

export default App;
