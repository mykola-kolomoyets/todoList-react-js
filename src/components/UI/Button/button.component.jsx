import React from "react";

import styles from "./button.styles.module.css";

const Button = (props) => {
  const { type, children, onClick } = props;
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
