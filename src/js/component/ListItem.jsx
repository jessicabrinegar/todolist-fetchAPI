import React from "react";

export default function ListItem ({text, remove}) {
    return (
        <div className="d-flex flex-row">
            <li className="list-group-item">{text}</li>
            <button onClick={remove}>X</button>
        </div>
    )
}