// src/components/ui/Card.js
import React from "react";

const Card = ({ children, style, className }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", ...style }} className={className}>
      {children}
    </div>
  );
};

export default Card;
