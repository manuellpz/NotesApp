import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [item, setItem] = useState("");
  const [notes, setNotes] = useState([]);

  const getItems = () => {
    return !localStorage.getItem("item")
      ? []
      : JSON.parse(localStorage.getItem("item"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let items = getItems();
    let id = Date.now()

    let value = [...items, { id, note: item }];

    localStorage.setItem("item", JSON.stringify(value));

    setNotes(value);
    setItem("");
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const removeItem = id => {
    let items = getItems().filter(el => el.id !== id)
    localStorage.setItem("item",JSON.stringify(items))
    setNotes(items)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="item"
          placeholder="Añadir Item: "
          onChange={handleChange}
          value={item}
        />
        {/* <input type="submit" value="Agregar" /> */}
      </form>
      <br />
      {getItems().length > 0 ? <TodoList notes={getItems()} removeItem={removeItem}/> : <h2>No Hay Datos</h2>}
    </div>
  );
};

export default Todo;
