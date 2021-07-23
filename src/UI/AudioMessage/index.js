import React from "react";

import {
  AudioMessageWrapp,
  AudioMessageButton,
  AudioMessageStatus,
  AudioMessageTime,
} from "./styled";

const AudioMessage = () => {
  return (
    <AudioMessageWrapp center>
      <AudioMessageButton />
      <AudioMessageStatus />
      <AudioMessageTime size={10} style={{ marginLeft: 10 }}>
        00:45
      </AudioMessageTime>
    </AudioMessageWrapp>
  );
};

export default AudioMessage;
