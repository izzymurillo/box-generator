import React from "react";
import { useState } from "react";

const Form = ({ boxes, setBoxes }) => {
  // ^^ lifting up state
  const [color, setColor] = useState("");
  const [dimensions, setDimensions] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newBox = {
      color,
      dimensions,
    };
    setBoxes([...boxes, newBox]);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Box Generator</h5>
        <form onSubmit={submitHandler}>
          <div className="row mb-3 mt-3">
            <label htmlFor="color" className="col">
              Color:
            </label>
            <input
              type="color"
              className="form-control-color col"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <label htmlFor="dimensions" className="col">
              Dimensions:
            </label>
            <input
              type="number"
              className="form-control-input col"
              id="dimensions"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Create Box
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
