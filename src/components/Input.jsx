import React, { useState, useContext } from "react";

import { Context } from "../Store";

const Input = () => {
  const [todo, setTodo] = useState("");
  const [id, setId] = useState(100);
  const [, dispatch] = useContext(Context);

  const handleChange = (e) => setTodo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { text: todo, id };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setTodo("");
    setId((id) => id + 1);
  };

  return (
    <form>
      <input value={todo} onChange={handleChange}></input>{" "}
      <button className="add" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default Input;
