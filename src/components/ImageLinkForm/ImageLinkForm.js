import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="lead">
        {"This Magic Brain will detect faces in your pictures. Give it a try. "}
      </p>
      <div className="center">
        <div className="box center" id="box">
          <input type="text" />
          <button>Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;