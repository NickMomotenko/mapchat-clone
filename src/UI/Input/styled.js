import styled from "styled-components";

import lypaIcon from "../../assets/icons/search.svg";

export const InputWrapp = styled.div`
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  overflow: hidden;
  width:100%;
  max-height: 48px;

  padding: 10px;

  display: inline-flex;
  align-items: center;

  &:before {
    content: "";
    display: inline-block;

    background: url(${lypaIcon}) center no-repeat;
    height: 19px;
    width: 19px;
  }
`;

export const InputContent = styled.input`
  color: #cccccc;
  font-size: 12px;
  margin-left: 13px;

  ::placeholder {
    color: #cccccc;
    font-size: 12px;
  }
`;
