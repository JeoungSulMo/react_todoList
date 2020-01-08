import React from "react";
import "./todoTemplate.css";

// 비구조화 할당
// props를 form, childrend 두가지의 프롭스로 받게 함
const template = ({ form, children }) => {
  return (
    <div className="todo-template">
      <div className="title">오늘 할 일</div>
      <div className="form-wrap">{form}</div>
      <div className="children-wrap">{children}</div>
    </div>
  );
};

export default template;
