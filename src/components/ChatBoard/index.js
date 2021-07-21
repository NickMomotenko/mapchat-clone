import React from "react";

import { ChatBoardWrapp, ChatBoardContent } from "./styled";

import ChatBoardHeader from "./ChatBoardHeader";
import ChatBoardList from "./ChatBoardList";

const ChatBoard = () => {
  return (
    <ChatBoardWrapp>
      <ChatBoardHeader />
      <ChatBoardContent>
        <ChatBoardList />
      </ChatBoardContent>
    </ChatBoardWrapp>
  );
};

export default ChatBoard;
