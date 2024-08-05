import React, { useReducer } from "react";

const initialState = {
  isEditing: false,
  editedItems: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "startEdit":
      return { ...state, isEditing: true, editedItems: action.payload };
    case "editItem":
      return { ...state, editedItems: action.payload };
    case "saveItem":
      return { ...state, isEditing: false };
    case "cancelEdit":
      return { ...state, isEditing: false, editedItems: "" };
    default:
      throw new Error();
  }
}

const ListItem = ({ item, handleCheck, handleDelete, handleSave }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    editedItems: item.title,
  });

  const handleItemSave = () => {
    handleSave(item.id, state.editedItems);
    dispatch({ type: "saveItem" });
  };

  return (
    <div className="listItems">
      <input
        className="checkbox"
        type="checkbox"
        checked={item.completed}
        onChange={() => handleCheck(item.id)}
      />
      {state.isEditing ? (
        <>
          <input
            type="text"
            value={state.editedItems}
            onChange={(e) =>
              dispatch({ type: "editItem", payload: e.target.value })
            }
          />
          <button onClick={handleItemSave}>
            <span>Save</span>
          </button>
        </>
      ) : (
        <>
          <p
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.title}
          </p>
          <div>
            <button
              onClick={() =>
                dispatch({ type: "startEdit", payload: item.title })
              }
            >
              <span>Edit</span>
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              disabled={!item.completed}
            >
              <span>Delete</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
