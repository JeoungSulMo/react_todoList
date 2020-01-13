import React from "react";
import Template from "./components/todoTemplate/todoTemplate.js";
import Form from "./components/form/form.js";
import TodoItemList from "./components/todoItemLIst/todoItemList.js";
import "./App.css";

// https://velopert.com/3480 여기서 배움

class App extends React.Component {
  id = 3;
  state = {
    input: "",
    todos: [
      { id: 0, text: " 리액트 소개", checked: false },
      { id: 1, text: " 리액트 소개", checked: true },
      { id: 2, text: " 리액트 소개", checked: false }
    ]
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  // 투두 생성 push 말고 concat을 사용하는 이유: js는 객체 참조형 문법을 가지고 있기 때문
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };
  // 눌러진 키가 Enter일때 이벤트 발동
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  // 체크 on/off 함수
  handleToggle = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  };

  // 제거
  removeItem = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    // this에대한 확실한 이해가 필요
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      removeItem
    } = this;
    return (
      <Template
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={removeItem}
        />
      </Template>
    );
  }
}

export default App;
