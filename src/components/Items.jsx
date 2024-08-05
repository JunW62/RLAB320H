import React, { useReducer } from "react";
import TodoItems from "./TodoItems";
import initialState from "../seedData";

function todoItemReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        {
          id: Date.now(),
          userId: 1,
          title: action.payload.title,
          completed: false,
        },
        ...state,
      ];
    case "delete":
      return state.filter((item) => item.id !== action.id);
    case "toggle":
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    case "save":
      return state.map((item) =>
        item.id === action.id ? { ...item, title: action.title } : item
      );
    default:
      throw new Error("Unknown action type: " + action.type);
  }
}

function reducer(state, action) {
  if (["add", "delete", "toggle", "save"].includes(action.type)) {
    return { ...state, items: todoItemReducer(state.items, action) };
  }
  switch (action.type) {
    case "changeInput":
      return { ...state, inputText: action.payload };
    default:
      return state;
  }
}

function Items() {
  const [state, dispatch] = useReducer(reducer, {
    items: initialState,
    inputText: "",
  });

  function handleChange(event) {
    dispatch({ type: "changeInput", payload: event.target.value });
  }

  function addItem() {
    if (state.inputText.trim()) {
      dispatch({ type: "add", payload: { title: state.inputText } });
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Create To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add Task"
          value={state.inputText}
        />
        <button className="add-btn" onClick={addItem}>
          Add
        </button>
      </div>
      <ul>
        {state.items.map((item) => (
          <TodoItems
            key={item.id}
            item={item}
            handleCheck={(id) => dispatch({ type: "toggle", id })}
            handleDelete={(id) => dispatch({ type: "delete", id })}
            handleSave={(id, title) => dispatch({ type: "save", id, title })}
          />
        ))}
      </ul>
    </div>
  );
}

export default Items;
