import { useEffect, useState } from "react";
import "./App.css";
import InsertItem from "./components/InsertItem";
import ItemList from "./components/ItemList";
import { Item } from "./types/type";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos") || "");
  const [items, setItems] = useState<Item[]>(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <h1>{`Todo List`}</h1>
        </div>
        <InsertItem items={items} setItems={setItems} />
        <ItemList items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
