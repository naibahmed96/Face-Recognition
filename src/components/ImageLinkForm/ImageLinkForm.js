import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonClick }) => {
  return (
    <div>
      <p className="lead">
        {"This Magic Brain will detect faces in your pictures. Give it a try. "}
      </p>
      <div className="center">
        <div className="box center" id="box">
          <input type="text" onChange={ onInputChange }/>
          <button onClick={ onButtonClick }>Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;