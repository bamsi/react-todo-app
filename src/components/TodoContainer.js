import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import TodoList from "./TodosList";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const getInitialTodos = () => {
    // getting stored items
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };

  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const delTodo = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const addTodoItem = (item) => {
    const newItem = {
      id: uuidv4(),
      title: item,
      completed: false,
    };
    setTodos([...todos, newItem]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: [updatedTitle],
          };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    // getting stored items
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [setTodos]);

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoItemProps={addTodoItem} />
          <TodoList
            todos={todos}
            handleChangeProps={handleChange}
            deleteTodoProps={delTodo}
            setUpdate={setUpdate}
          />
        </div>
      </div>
  );
};

export default TodoContainer;
