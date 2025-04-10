// src/components/ui/Input.js
import React from "react";

const Input = ({ value, onChange, placeholder, type = "text", style, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ padding: "5px", marginRight: "10px", ...style }}
      className={className}
    />
  );
};

export default Input;
