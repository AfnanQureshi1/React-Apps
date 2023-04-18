import React from "react";

function Button(props) {
  const buttonStyle = {
    backgroundColor: props.color,
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

function ButtonGroup(props) {
  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0",
  };

  return (
    <div style={buttonGroupStyle}>
      <Button color={props.leftColor} onClick={props.onLeftClick}>
        Left
      </Button>
      <Button color={props.centerColor} onClick={props.onCenterClick}>
        Center
      </Button>
      <Button color={props.rightColor} onClick={props.onRightClick}>
        Right
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ButtonGroup
        leftColor="#FF5733"
        centerColor="#C70039"
        rightColor="#900C3F"
        onLeftClick={() => console.log("Left button clicked!")}
        onCenterClick={() => console.log("Center button clicked!")}
        onRightClick={() => console.log("Right button clicked!")}
      />
    </div>
  );
}
