import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //this stops the refresh
    // do the login logic...
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //loged in redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault(); //this stops the refresh
    // do the register logic...
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={register}
          type="submit"
          className="login__registerButton"
        >
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
