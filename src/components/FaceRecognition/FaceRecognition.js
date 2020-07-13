import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL, box}) => {
  return (
    <div className="center">
      <div className="absolute">
        <img className="img" src={imageURL} alt="" id="inputImage" />
        <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}
export default FaceRecognition;