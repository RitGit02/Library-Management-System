// src/components/ui/Button.js
import React from "react";

const Button = ({ children, onClick, style, className }) => {
  return (
    <button onClick={onClick} style={{ padding: "5px 10px", ...style }} className={className}>
      {children}
    </button>
  );
};

export default Button;