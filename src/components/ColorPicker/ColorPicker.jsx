import React, { useState } from "react";
import './ColorPicker.css';

function ColorPicker({ colors, onChange }) {
  const [color1, setColor1] = useState(colors[0]);
  const [color2, setColor2] = useState(colors[1]);

  function handleColorChange(index, event) {
    const newColor = event.target.value;
    onChange([index === 0 ? newColor : color1, index === 1 ? newColor : color2]);
    index === 0 ? setColor1(newColor) : setColor2(newColor);
  }

  return (
    <div className="color-picker">

      <div className="start_color">
      {/* <label htmlFor="start-color" className="s_color">Start Color:</label> */}
      <input
        type="color"
        id="start-color"
        name="start-color"
        value={color1}
        onChange={(event) => handleColorChange(0, event)}
      />
      </div>

      <div className="end_color">
      {/* <label htmlFor="end-color" className="e_name">End Color:</label> */}
      <input
        type="color"
        id="end-color"
        name="end-color"
        value={color2}
        onChange={(event) => handleColorChange(1, event)}
      />
      </div>

    </div>
  );
}

export default ColorPicker;
