import "./Preview.css";

function Preview(props) {
  const { colors, direction, thickness } = props;

  const borderStyle = {
    borderStyle: "solid",
    borderWidth: `${thickness}px`,
  };

  if (colors && colors.length > 1) {
    borderStyle.borderImage = `linear-gradient(to ${direction}, ${colors.join(",")}) 1`;
    borderStyle.borderImageSlice = 1;
  } else if (colors && colors.length === 1) {
    borderStyle.borderColor = colors[0];
  }
  console.log(borderStyle)

  return (
    
    <div className="preview_front">
      <div className="preview_back">
      
        <div
          className="preview-container"
          style={{
            ...borderStyle,
          }}
        />
      </div>
    </div>
  );
}

export default Preview;
