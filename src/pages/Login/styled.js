import styled from "styled-components";

import loginBg from "../../assets/patterns/login-bg.png";

export const LoginWrapp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background: url(${loginBg}) center no-repeat;
`;

export const LoginFormBody = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
