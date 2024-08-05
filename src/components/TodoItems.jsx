import React, { useState } from "react";

const ListItem = ({ item, handleCheck, handleDelete, handleSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item.title);

  const handleItemSave = () => {
    handleSave(item.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <div className="listItems">
      <input
        className="checkbox"
        type="checkbox"
        checked={item.completed}
        onChange={() => handleCheck(item.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
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
            <button onClick={() => setIsEditing(true)}>
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

// function TodoItems(props) {
//   return (
//     <div
//       onClick={() => {
//         props.onChecked(props.id);
//       }}
//     >
//       <li>{props.text}</li>
//     </div>
//   );
// }

// export default TodoItems;
