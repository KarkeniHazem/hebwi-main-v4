import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { userActions } from "../features/user/actions";
import "./login.css";

const Login = () => {
  return (
    <div className="login-screen">
      <div className="login-container">
        <div className="login-header">
          <h1 className="logo">my app</h1>
        </div>
        <div className="login-form">
          <h2>Sign in</h2>
          <div className="formy">
            <input type="text" />
            <label htmlFor=""></label>
            <input type="password" />
            <label htmlFor=""></label>
          </div>
          <div className="socila-media-img">
            <img src="/img/fb.png" alt="fb" width="40%" />
            <img src="/img/fb.png" alt="fb" width="40%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
