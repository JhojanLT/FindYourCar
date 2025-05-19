import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = ({ children, onClick, variant = "primary", disabled = false, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.btn, styles[`${variant}`], className)}
    >
      {children}
    </button>
  );
};

export { Button };
