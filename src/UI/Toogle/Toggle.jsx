import React from "react";
import './Toggle.css'
const Toggle = ({ onChange }) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={onChange} />
      <span className="slider"></span>
    </label>
  );
};

export default Toggle;
