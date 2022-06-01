import React from "react";

import TodoItem from "./TodoItem";

const TodoList = ({todos, handleChangeProps, deleteTodoProps, setUpdate }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} changeProps={handleChangeProps} deleteTodo={deleteTodoProps} setUpdate={setUpdate} />
      ))}
    </ul>
  );
};

export default TodoList;
