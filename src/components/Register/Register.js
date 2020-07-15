import React from "react";

const Register = ({ onRouteChange }) => {
  return (
    <section id="card">
      <form>
        <legend>Register</legend>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="submit-form">
          <input
            type="submit"
            value="Register"
            onClick={() => onRouteChange("signin")}
          />
        </div>
        
      </form>
    </section>
  );
};

export default Register;
