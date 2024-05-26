import React, { useState } from "react";
import classes from "./ColorPallete.module.css";

const ColorPallete = () => {
  const [colorList, setColorList] = useState(["#000000"]);

  const addColor = () => {
    setColorList((prevColorList) => [...prevColorList, "#000000"]);
  };

  const handleColorChange = (index, newColor) => {
    setColorList((prevColors) =>
      prevColors.map((color, i) => (i === index ? newColor : color))
    );
  };

  const handleDeleteColor = (index) => {
    setColorList((prevColorList) =>
      prevColorList.filter((_, i) => i !== index)
    );
  };

  const colorInputs = colorList.map((color, index) => (
    <div key={index} className={classes.colorList}>
      <input
        key={index}
        type="color"
        value={color}
        onChange={(e) => handleColorChange(index, e.target.value)}
        className={classes.inp}
      />
      <button classname={classes.crossIcon} onClick={() => handleDeleteColor(index)}>
      <svg width="25" height="25" viewBox="0 0 46 46" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.5425 17.3431L24.8856 23L30.5425 28.6569L28.6569 30.5425L23 24.8856L17.3431 30.5425L15.4575 28.6569L21.1144 23L15.4575 17.3431L17.3431 15.4575L23 21.1144L28.6569 15.4575L30.5425 17.3431Z" fill="#020202"/>
</svg>
      </button>
    </div>
  ));

  return (
    <div className={classes.addColor}>
      {colorInputs}
      <button className={classes.tooltip} onClick={addColor}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>
    </div>
  );
};

export default ColorPallete;
