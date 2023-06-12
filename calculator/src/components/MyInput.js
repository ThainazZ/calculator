import React, { useState } from "react";
import App from "../App";



function MyInput({ value, onChange}) {
  const maxLength = 9;
  const maxLines = 3;

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    let lines = inputValue.split("\n");

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].length > maxLength) {
        lines[i] = lines[i].substring(0, maxLength);
      }
    }

    if (lines.length > maxLines) {
      lines = lines.slice(0,maxLines);
    }

    onChange(lines.join("\n"));
  };
  

  return (
    <textarea
      type="text"
      value={value}
      onChange={handleInputChange}
      style={{
        width: "247px",
        height: "85px",
        textDecoration: "none",
        border: "none",
        outline: "none",
        textAlign: "right",
        alignItems: "flex-end",
        fontSize: "2rem",
        verticalAlign: "bottom",
        backgroundColor: "#d9d9d9",
        resize: "none",
      }}
    />
  );
};

export default MyInput;
