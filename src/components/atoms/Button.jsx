import React from "react";

export const Button = (props) => {
  const { onClick, label, disabled = false } = props;
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
