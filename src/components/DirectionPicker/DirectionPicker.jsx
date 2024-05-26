import React from "react";
import "./DirectionPicker.css";

const directions = [
  { id: "top", value: "top", label: "Top" },
  { id: "right", value: "right", label: "Right" },
  { id: "diagonal", value: "bottom right", label: "Diagonal" },
];

function DirectionPicker({ onChange }) {
  function handleDirectionChange(event) {
    onChange(event.target.value);
  }

  return (
    <>
      <label>Choose Direction:</label>
      <div className="direction_picker">

        <label htmlFor="top">
          <input
            type="radio"
            id="top"
            name="direction"
            value="top"
            onChange={handleDirectionChange}
          />
          Top
        </label>
        <label htmlFor="bottom">
          <input
            type="radio"
            id="bottom"
            name="direction"
            value="bottom"
            onChange={handleDirectionChange}
          />
          Bottom
        </label>

        <label htmlFor="right">
          <input
            type="radio"
            id="right"
            name="direction"
            value="right"
            onChange={handleDirectionChange}
          />
          Right
        </label>
        <label htmlFor="left">
          <input
            type="radio"
            id="left"
            name="direction"
            value="left"
            onChange={handleDirectionChange}
          />
          Left
        </label>

        <label htmlFor="bottomRight">
          <input
            type="radio"
            id="bottomRight"
            name="direction"
            value="bottom right"
            onChange={handleDirectionChange}
          />
          Bottom Right
        </label>
        <label htmlFor="bottomLeft">
          <input
            type="radio"
            id="bottomLeft"
            name="direction"
            value="bottom left"
            onChange={handleDirectionChange}
          />
          Bottom Left
        </label>
        <label htmlFor="topRight">
          <input
            type="radio"
            id="topRight"
            name="direction"
            value="top right"
            onChange={handleDirectionChange}
          />
          Top Right
        </label>
        <label htmlFor="topLeft">
          <input
            type="radio"
            id="topLeft"
            name="direction"
            value="top left"
            onChange={handleDirectionChange}
          />
          Top Left
        </label>

        {directions.map((direction) => (
          <label htmlFor={direction.id} key={direction.id}>
            <input
              type="radio"
              id={direction.id}
              name="direction"
              value={direction.value}
              onChange={handleDirectionChange}
            />
            {direction.label}
          </label>
        ))}

      </div>
    </>
  );
}

export default DirectionPicker;
