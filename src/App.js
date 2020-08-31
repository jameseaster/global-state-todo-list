import React from "react";
import "./App.css";

import Store from "./Store";
import Header from "./components/Header";
import List from "./components/List";
import Input from "./components/Input";

function App() {
  return (
    <Store>
      <div className="App">
        <Header />
        <Input />
        <List />
      </div>
    </Store>
  );
}

export default App;
