import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageURL}) => {
  return (
    <div className="center">
      <div>
        <img className="img" src={imageURL} alt="" />
      </div>
    </div>
  );
}
export default FaceRecognition;