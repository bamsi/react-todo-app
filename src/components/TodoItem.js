import React, { useState, useEffect  } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, changeProps, deleteTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const handleEditing = (value) => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const onChangeTitle = (e, id) => {
    setUpdate(e.target.value, id);
  }

  const onChangeCompleted = (e) => {
      if(e.key === "Enter"){
        setEditing(false);
      }
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  return (
    <li className={styles.item}>
      <div onClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => changeProps(todo.id)}
        />
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
      </div>

      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={todo.title}
        onChange={(e) => onChangeTitle(e, todo.id)}
        onKeyDown={(e) => onChangeCompleted(e)}
      />
    </li>
  );
};

export default TodoItem;
