import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";
import login_img from "../img/login_img.png";
import login_logo from "../img/newlogo-removebg-preview.png";

import App12 from "../sampledash/maindashboard";

function Login() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log('Sending request...');
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile_number: mobileNumber, password }),
      });

      console.log('Response:', response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Handle the response accordingly
      if (data.success) {
        console.log('Login successful');
        setLoginStatus('success');
        setIsLoggedIn(true); // Set authentication state to true
      } else {
        console.log('Login failed');
        setLoginStatus('failure');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginStatus('error');
    }
  };

  if (isLoggedIn) { // If user is authenticated, render Admin component
    return <App12/>;
  }

  return (
    <>
      <div className="login_con">
        <div className="left_side">
          <div className="login_img">
            <img src={login_img} alt="Login" />
          </div>
          <div className="login_logo">
            <NavLink to="/home">
              <img src={login_logo} alt="Login Logo" />
            </NavLink>
          </div>
        </div>
        <div className="right_side">
          <div className="center_div">
            <h1>Login</h1>
            <p className="wel">Welcome Back</p>
            <form className="form5" onSubmit={handleLogin}>
              <div className="input-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  placeholder="User Name"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="options">
                <label>
                  <input type="checkbox" name="remember" className="remember" /> Remember Me
                </label>
                <p className="forgot_password1">Forgot Password?</p>
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              <div>
                <p className="Dont">Don't have an account? Create a free account</p>
              </div>
            </form>
            {loginStatus === 'success' && <p>Login successful! Redirecting...</p>}
            {loginStatus === 'failure' && <p className="error-message">Login failed. Please try again.</p>}
            {loginStatus === 'error' && <p className="error-message">An error occurred. Please try again later.</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
