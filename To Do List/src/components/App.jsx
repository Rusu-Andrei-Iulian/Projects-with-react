import React, { useState } from "react";


function App() {
  const [inputText, setInputText] = useState("");
  const [item, addItem] = useState([]);

  function input(event) {
    const item = event.target.value;
    setInputText(item);
  }

  function add() {
    addItem((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Add Item"
          onChange={input}
          value={inputText}
        ></input>
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((toDoitem) => (
            <li>{toDoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
