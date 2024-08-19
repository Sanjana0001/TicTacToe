import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "2px solid #444",
        height: "100px",
        width: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
      className="square"
    >
      <h2 style={{ color: "#444" }}>{props.value}</h2>
    </div>
  );
};

export default Square;
