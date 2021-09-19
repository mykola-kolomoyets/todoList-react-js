import React from "react";

import "./button.styles.css";

const Button = (props) => {
  const { type, children, onClick } = props;
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
