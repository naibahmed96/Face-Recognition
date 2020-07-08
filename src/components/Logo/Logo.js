import React from "react";
import Tilt from 'react-tilt';
import brain from './brain.png';
import "./Logo.css";

const Logo = () => {
  return (
    <div className="tilt-box">
      <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;