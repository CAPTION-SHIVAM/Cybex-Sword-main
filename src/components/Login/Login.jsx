import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth);
  // const navigate=useNavigate()
  const navigate = useNavigate();
  const  dispatch=useDispatch();
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const obj = {
        username,
        password,
      };
      console.log(obj);
      if (
        username.trim().length <= 0 ||
        password.trim().length <= 0 ||
        email.trim().length <= 0
      ) {
        // todo: must handle the cases for invalid input
        console.log(username.length);
        console.log(email.length);
        console.log(password.length);
        alert("please enter all the value");
        return;
      }
      const response = await axios.post(`${URL_PATH}/user/login`, obj);
      console.log(response);
      const { accessToken, refreshToken } = response?.data?.data;
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);
      dispatch(login({...response?.data?.data.user,accessToken,refreshToken}));
      console.log(`user login`);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.log(`something went wrong`);
    }
  };
  return (
    <div className={classes.main}>
      <section className={classes.section}>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <span></span> <span></span> <span></span> <span></span> <span></span>
        <div class={classes.signin}>
          <div class={classes.content}>
            <h2>Sign In</h2>

            <div class={classes.form}>
              <div class={classes.inputBox}>
                <input type="text" id="username" required />
                <i>Username or email</i>
              </div>

              <div class={classes.inputBox}>
                <input type="password" id="password" required /> <i>Password</i>
              </div>

              <div class={classes.links}>
                <a href="#">Forgot Password</a>
                <Link to="/signup">Sign Up</Link>
              </div>

              <div class={classes.inputBox}>
                <input type="submit" id="loginBtn" onClick={loginHandler} value="Login" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
