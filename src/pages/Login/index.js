import React from "react";

import { LoginWrapp, LoginFormBody } from "./styled";

import Preview from "../../components/Preview";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <LoginWrapp>
      <Preview />
      <LoginFormBody>
        <LoginForm />
      </LoginFormBody>
    </LoginWrapp>
  );
};

export default Login;
