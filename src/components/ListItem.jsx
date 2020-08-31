import React from "react";

const ListItem = ({ todo, dispatch }) => {
  // Remove todo by dispatching action to reducer
  const remove = () => dispatch({ type: "REMOVE_TODO", payload: todo.id });

  return (
    <div>
      <p>
        {todo.text}{" "}
        <button className="remove" onClick={remove}>
          x
        </button>
      </p>
    </div>
  );
};

export default ListItem;
