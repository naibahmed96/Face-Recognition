import React, { Component } from 'react';
import Clarifai from 'clarifai';
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import Navigation from './components/Navigation/Navigation';
import SignIn from "./components/SignIn/SignIn";
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: "e0e859cc6a7c4ef28e7350e1d8c25000",
});

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
      input: '',
      imageURL: '',
      box: {}
    }
  } 

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height ,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }

  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({ box: box });
   }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonClick = () => {
    this.setState({imageURL: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));

    console.log('Clicked');
  }

  render() {
    return (
      <div className="App">
        <Particles params={particlesOption} className="particles" />
        <Navigation />
        <SignIn />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange} 
          onButtonClick={this.onButtonClick}
        />
        <FaceRecognition box={this.state.box} imageURL={this.state.imageURL}/>
      </div>
    );
  }
 
}

export default App;
