import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
      <nav>
          <p onClick={() => onRouteChange('signout')} href="#">
            Sign Out
          </p>
      </nav>
      )
    } else {
      return (
        <nav>
          <p onClick={() => onRouteChange('register')}>Register</p>
          <p onClick={() => onRouteChange('signin')}>Sign In</p>
        </nav>
      )
    }
    
}

export default Navigation;