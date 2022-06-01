import React, { useState } from "react";

const InputTodo = ({ addTodoItemProps }) => {
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItemProps(title);
    } else {
      alert("Please enter input value");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        value={title}
        onChange={(e) => onChange(e)}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
