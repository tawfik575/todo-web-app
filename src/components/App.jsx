import ToDoItem from "./ToDoItem";
import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(event) {
    if (inputText.length > 0 && (event.button === 0 || event.key === "Enter")) {
      setItems(prevItems => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input onChange={handleChange} onKeyDown={addItem} type="text" value={inputText} />
        <button onClick={addItem}><span>Add</span></button>
      </div>

      <div className="todo-list">
        {items.map((todoItem, index) => (
          <ToDoItem key={index} id={index} item={todoItem} />
        ))}
      </div>
    </div>
  );
}