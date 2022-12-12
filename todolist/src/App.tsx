import { useEffect, useState } from "react";
import "./App.css";
import InsertItem from "./components/InsertItem";
import ItemList from "./components/ItemList";
import { Item } from "./types/type";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <h1>{`Todo List`}</h1>
        </div>
        <InsertItem />
        <ItemList />
      </div>
    </div>
  );
}

export default App;
