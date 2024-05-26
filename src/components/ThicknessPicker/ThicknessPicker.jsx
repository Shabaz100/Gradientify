import React, { useState } from "react";
import "./ThicknessPicker.css";

function ThicknessPicker(props) {
  const [thickness, setThickness] = useState(3);

  function handleThicknessChange(event) {
    const newThickness = event.target.value;
    setThickness(newThickness);
    props.onChange(newThickness);
  }

  return (
    <div className="thickness-picker">
      <div>
        <label>Thickness: </label>
        <input
          type="range"
          min="1"
          max="100"
          defaultValue="3"
          onChange={handleThicknessChange}
          className="progress"
        />
      </div>
      <div>
      
        <p className="thick_val">{`${
          Math.round((thickness / 100) * 1000) / 10
        }px`}</p>
      </div>

      <p >
        <input type="text" onChange={handleThicknessChange} className="thick_val" value={thickness}/> px
      </p></div>

    </div>
  );
}

export default ThicknessPicker;
