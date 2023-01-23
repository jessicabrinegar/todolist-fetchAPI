import React from "react";

export default function ListItem ({text, remove}) {
    return (
        <div className="d-flex flex-row w-100">
            <li className="ps-3 todo-item list-group-item flex-fill text-start">{text}</li>
            <button className="delete-btn" onClick={remove}>X</button>
        </div>
    )
}