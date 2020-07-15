import React from 'react';
import './SignIn.css';

const SignIn = ({ onRouteChange }) => {
  return (
    <section id="card">
      <form>
        <legend>Sign In</legend>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="submit-form">
          <input
            type="submit"
            value="Sign in"
            onClick={() => onRouteChange("home")}
          />
        </div>
        <div className="register">
          <p onClick={() => onRouteChange("register")}> Register</p>
        </div>
      </form>
    </section>
  );
}

export default SignIn;