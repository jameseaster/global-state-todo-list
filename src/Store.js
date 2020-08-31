import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  todos: [
    { id: 0, text: "Learn Global State" },
    { id: 1, text: "Fold Laundry" },
    { id: 2, text: "Drink Coffee" },
    { id: 3, text: "Go Running" },
  ],
};

export const Context = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
