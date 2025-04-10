// src/components/ui/CardContent.js
import React from "react";

const CardContent = ({ children, style, className }) => {
  return (
    <div style={{ padding: "10px", ...style }} className={className}>
      {children}
    </div>
  );
};

export default CardContent;
