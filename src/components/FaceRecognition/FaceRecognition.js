import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL}) => {
  return (
    <div className="center">
      <div>
        <img className="img" src={imageURL} alt="" id="inputImage" />
      </div>
    </div>
  );
}
export default FaceRecognition;