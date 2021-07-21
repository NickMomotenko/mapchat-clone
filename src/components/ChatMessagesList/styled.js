import styled from "styled-components";

export const ChatMessagesListWrapp = styled.div`
    margin-top: 20px;
`;

export const ChatMessagesItem = styled.div`
  padding: 18px;
  border-radius: 10px;
  cursor: pointer;

  background: ${(props) => (props.activeStatus ? "#fef0e6" : "transparent")};
`;
