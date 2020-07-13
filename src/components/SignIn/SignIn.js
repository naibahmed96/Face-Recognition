import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <section id="card">
      <form>
        <legend>Sign In</legend>
        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="submit-form">
          <input type="submit" value="Sign in" />
        </div>
        <div className="register">
          <p>
            <a href="">Register</a>
          </p>
        </div>
      </form>
    </section>
  );
}

export default SignIn;