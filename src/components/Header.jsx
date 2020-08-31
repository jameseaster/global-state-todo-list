import React, { useContext } from "react";

import { Context } from "../Store";

const Header = () => {
  const [state] = useContext(Context);

  const message = () => {
    if (!state.todos.length) {
      return <p>I finished my Todo List!</p>;
    } else if (state.todos.length === 1) {
      return <p>I have {state.todos.length} todo left</p>;
    } else {
      return <p>I have {state.todos.length} todos left</p>;
    }
  };

  return <div>{message()}</div>;
};

export default Header;
