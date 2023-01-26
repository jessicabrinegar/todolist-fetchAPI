import React from "react";

export default function Todo ({text, index, handleRemoveTodo}) {
    return (
        <div className="d-flex flex-row w-100">
            <li className="todo-item list-group-item flex-fill text-start">{text}</li>
            <button className="delete-btn" onClick={() => handleRemoveTodo(index)}>X</button>
        </div>
    )
}