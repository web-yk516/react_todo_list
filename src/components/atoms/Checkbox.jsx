import React from "react";

export const Checkbox = (props) => {
  const { checked, onChange } = props;
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
}
