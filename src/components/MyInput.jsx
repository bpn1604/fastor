import React from "react";

const MyInput = ({ type, placeholder, onChange, title, value }) => {
  return (
    <>
      <span>{title}</span>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      ;
    </>
  );
};

export default MyInput;
