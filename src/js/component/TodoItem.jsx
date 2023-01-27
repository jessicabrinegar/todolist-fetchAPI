import React, {useState} from "react";

export default function Todo ({text, index, handleRemoveTodo}) {
    const [showButton, setShowButton] = useState(false);

    return (
        <div className="d-flex flex-row w-100 mb-2" 
            onMouseEnter={() => setShowButton(true)} 
            onMouseLeave={() => setShowButton(false)}>

            <li className="todo-item list-group-item flex-fill text-start">{text}</li>
            
            {showButton && <button className="delete-btn" onClick={() => handleRemoveTodo(index)}>X</button>}

        </div>
    )
}