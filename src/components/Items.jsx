import React, { useState, useReducer } from "react";
import TodoItems from "./TodoItems";
import initialState from "../seedData";
import todoItemReducer from "./TodoItemReducer";

function Items() {
  const [inputText, setInputText] = useState("");
  const [items, dispatch] = useReducer(todoItemReducer, initialState);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    dispatch({
      type: "add",
      payload: { userId: 1, title: inputText, completed: false },
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <TodoItems
              key={item.id}
              item={item}
              handleCheck={(id) =>
                dispatch({ type: "toggle", payload: { id } })
              }
              handleDelete={(id) =>
                dispatch({ type: "delete", payload: { id } })
              }
              handleSave={(id, title) =>
                dispatch({ type: "edit", payload: { id, title } })
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Items;
