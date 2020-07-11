import React, { Component } from 'react';
import Particles from "react-particles-js";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOption = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800,
        factor: 1000
      }
    },
    
  }
};

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonClick = () => {
    console.log('Clicked');
  }

  render() {
    return (
      <div className="App">
        <Particles params={particlesOption} className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange} 
          onButtonClick={this.onButtonClick}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
 
}

export default App;
