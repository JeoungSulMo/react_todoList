import React from "react";
import "./todoItemList.css";
import TodoItem from "../todoItem/todoItem.js";

class List extends React.Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}             // 여기
        text={text}         // 여기
        checked={checked}   // 여기 세 부분 대신 {...todo}를 입력해도 됨
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      ></TodoItem>
    ));
    return <div>{todoList}</div>;
  }
}

export default List;
