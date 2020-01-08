import React from "react";
import "./form.css";

const form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="create-btn" onClick={onCreate}>
        추가
      </div>
    </div>
  );
};

export default form;
