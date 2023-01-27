import React, {useState, useEffect} from "react";
import Todo from "./TodoItem.jsx"


export default function TodoApp () {
    const [input, setInput] = useState('');
    const [todos,setTodos] = useState([]);
    const [validInput, setValidInput] = useState(true);

    const handleAddTodo = (e) => {
        e.preventDefault()
        if (input === '') setValidInput(false);
        else{
            setValidInput(true);
            todos.length ? setTodos([...todos, input]) : setTodos([input])
        }
        setInput('');
    }

    const handleRemoveTodo = (index) => {
        let newList = todos.filter((item, i) => i !== index)
        setTodos(newList);
    }
    let footerText;
    if (todos.length == 1) footerText = `${todos.length} task left`;
    else if (todos.length == 0) footerText =  'No tasks, add a task';
    else footerText = `${todos.length} tasks left`;

    return (
        <div className="todo-container w-75 d-flex flex-column">
            <form className="d-flex w-100 mb-1">
                <input className={`ps-4 w-100 ${validInput ? 'valid-input' : 'invalid-input'}`} 
                type="text" autoFocus 
                placeholder={validInput ? 'What needs to be done?' : 'Type a todo!'} 
                onChange={e => setInput(e.target.value)} 
                value={input}
                />
                <button type="submit" onClick={handleAddTodo}>Add</button>
            </form>
            <ul className="m-0 ps-4 d-flex flex-column align-items-start">
                {todos.map((todo,index) => {
                    return <Todo key={index.toString()} 
                    text={todo} 
                    index={index} 
                    handleRemoveTodo={handleRemoveTodo}
                />})}
            </ul>
            <div className="d-flex flex-row w-100">
                <li className="list-group-item flex-fill text-start" id="count">
                    {footerText}
                </li>
            </div>
        </div>
    )
}