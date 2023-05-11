import React from "react";
import Form from "./Form";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_container">
      <div className="login_form">
        <h5 className="login_title">SOCIALLY.</h5>
        <Form />
      </div>
      <div className="login_image"></div>
    </div>
  );
};

export default Login;
