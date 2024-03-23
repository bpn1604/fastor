import React from "react";

const MyButon = ({ onClick, style, title, disabled }) => {
  return (
    <button className="btn" onClick={onClick} style={style} disabled={disabled}>
      {title}
    </button>
  );
};

export default MyButon;
