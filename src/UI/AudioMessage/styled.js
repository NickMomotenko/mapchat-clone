import styled from "styled-components";

import { Row } from "../Layout";
import Text from "../Text";

import playIcon from "../../assets/icons/play.svg";
import audioPattern from "../../assets/patterns/audio.svg";

export const AudioMessageWrapp = styled(Row)`
  position: relative;
  z-index: 1;
`;

export const AudioMessageButton = styled.button`
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #f5924a;
  flex-shrink: 0;

  border: 3px solid #fdc39a;
  transition: 0.3s;

  &:hover {
    background: #dc884a;
  }

  &:before {
    content: "";
    display: inline-block;
    background: url(${playIcon}) center no-repeat;
    height: 8px;
    width: 8px;
  }
`;

export const AudioMessageStatus = styled.div`
  background: url(${audioPattern}) center no-repeat;
  background-size: contain;
  height: 26px;
  width: 100%;
  margin-left: 10px;
`;

export const AudioMessageTime = styled(Text)``;
