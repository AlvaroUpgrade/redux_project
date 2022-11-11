import React from "react";

const ReusableButton = ({ size, text, color }) => {
  return (
    <button
      width={size === "xl" ? "300px" : size === "l" ? "200px" : "100px"}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default ReusableButton;
