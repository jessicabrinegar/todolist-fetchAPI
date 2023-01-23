import React, {useState, useEffect, useMemo, useRef} from "react";
import ListItem from "./ListItem.jsx"

// How to access the prop within <ListItem /> (an id, so i can remove it when the X button is clicked)

export default function Todos () {
    const [input, setInput] = useState('');
    const [listItems,setListItem] = useState([]);
    const [validInput, setValidInput] = useState(true);

    const handleAddTodo = (e) => {
        e.preventDefault()
        if (input != ''){
            setValidInput(true);
            setListItem(listItems.concat(<ListItem key={listItems.length + 1} text={input} remove={handleRemoveTodo} />));
            setInput('');
            console.log(listItems);
        }
        else{
            setValidInput(false);
        }
    }

    const handleRemoveTodo = ({id}) => {
        console.log('removed');
        // setListItem(listItems.splice(props.id,1, ''));
    }

    return (
        <div className="todo-container w-75">
            <form className="d-flex">
                <input className={`ps-3 w-100 ${validInput ? 'valid-input' : 'invalid-input'}`} 
                type="text" autoFocus 
                placeholder={validInput ? 'What needs to be done?' : 'Type a todo!'} 
                onChange={e => setInput(e.target.value)} 
                value={input}
                />
                <button type="submit" onClick={handleAddTodo}>Add</button>
            </form>
            <ul className="list-group">
                {listItems}
            </ul>
        </div>
    )
}
//{`rounded-circle ${color}-light ${activeColor == color ? 'selected' : ''}`}