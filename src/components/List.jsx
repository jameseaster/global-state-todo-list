import React, { useContext } from "react";

import ListItem from "./ListItem";
import { Context } from "../Store";

const List = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      {state.todos.map((todo) => (
        <ListItem todo={todo} dispatch={dispatch} key={todo.id} />
      ))}
    </div>
  );
};

export default List;
