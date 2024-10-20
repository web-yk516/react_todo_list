import React from "react";

export const TextInput = (props) => {
  const { placeholder, value, onChange } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
