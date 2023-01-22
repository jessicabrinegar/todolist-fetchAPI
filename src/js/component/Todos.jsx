import React, {useState, useEffect, useMemo} from "react";
import ListItem from "./ListItem.jsx"


export default function Todos () {
    const [input, setInput] = useState('');
    const [listItems,setListItem] = useState([]);
    const [validInput, setValidInput] = useState(true);

    const handleAddTodo = (e) => {
        e.preventDefault()
        if (input != ''){
            setRedBorder(false);
            setListItem(listItems.concat(<ListItem key={listItems.length} text={input} remove={handleRemoveTodo}/>));
            setInput('');
            console.log(listItems.length);
        }
        else{
            setValidInput(false);
        }
    }

    const handleRemoveTodo = () => {
        console.log('removed');
    }

    return (
        <div className="border w-75">
            <form className="d-flex">
                <input className={`px-3 w-100 ${validInput ? 'valid-item' : 'invalid-input'}`} 
                type="text" autoFocus 
                placeholder={validInput ? 'What needs to be done?' : 'Type a todo!'} 
                onChange={e => setInput(e.target.value)} 
                value={input}
                />
                <button type="submit" onClick={handleAddTodo}>
                    Add
                </button>
            </form>
            <ul className="list-group">
                {listItems}
            </ul>
        </div>
    )
}
//{`rounded-circle ${color}-light ${activeColor == color ? 'selected' : ''}`}