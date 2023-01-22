import React, {useState, useEffect} from "react";
import ListItem from "./ListItem.jsx"


export default function Todos () {
    const [input, setInput] = useState('');
    const [listItems,setListItem] = useState([]);

    const handleAddTodo = (e) => {
        e.preventDefault()
        setListItem(listItems.concat(<ListItem key={listItems.length} text={input}/>));
        console.log('list item added')
    }

    const handleRemoveTodo = () => {
        console.log('removed');
    }

    return (
        <div className="border w-75">
            <form className="d-flex">
                <input className="px-3 w-100" type="text" placeholder="What needs to be done?" 
                onChange={e => setInput(e.target.value)} 
                value={input}/>
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