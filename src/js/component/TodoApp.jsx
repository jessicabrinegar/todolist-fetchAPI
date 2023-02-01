import React, {useState, useEffect} from "react";
import axios from "axios";
import Todo from "./TodoItem.jsx"


export default function TodoApp () {
    const [input, setInput] = useState('');
    const [todos,setTodos] = useState([]);
    const [validInput, setValidInput] = useState(true);

    const getData = async () => {
        try{
            const response = await axios.get('https://assets.breatheco.de/apis/fake/todos/user/jessieb');
            setTodos(response.data);
            console.log(response.data);
            console.log(todos);
        }
        catch(error){
            console.log(error.message)
        }
        // axios
        // .get('https://assets.breatheco.de/apis/fake/todos/user/jessieb')
        // .then(response => setTodos(response.data))
        //console.log(response.data) --> {"label":"some task", "done":false}
    }
    const addData = async () => {
        try{
            const response = await axios.put('https://assets.breatheco.de/apis/fake/todos/user/jessieb', [...todos])
            console.log(response.config.data);
            setTodos(response.config.data);
        }
            // const response = await axios.put('https://assets.breatheco.de/apis/fake/todos/user/jessieb', [...todos, {label:input, done:false}])
            // todos.length > 0 ? setTodos([...todos, {label:input, done:false}]) : setTodos([{label:input, done:false}]);
            // setTodos([...todos, {label:input, done:false}])
        catch(error){
            console.log(error.message)
        }
    }
        // axios({
        //     method:'put',
        //     url:'https://assets.breatheco.de/apis/fake/todos/user/jessieb',
        //     data: [...todos]
        // })
        // .then(response => console.log(response.data));
    
    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        addData();
    }, [todos]);

    const handleAddTodo = async (e) => {
        e.preventDefault()
        if (input === '') setValidInput(false);
        else{
            setValidInput(true);
            setTodos([...todos, {label:input, done:false}])
        }
        setInput('');
    }

    const handleRemoveTodo = (index) => {
        let newList = todos.filter((item, i) => i !== index)
        setTodos(newList);
    }
    const handleRemoveAll = () => {
        let newData = [{label:'', done:false}];
        setTodos(newData);
        axios({
            method:'put',
            url:'https://assets.breatheco.de/apis/fake/todos/user/jessieb',
            data: [{label:'', done:false}]
        }).then(response => console.log(response.data))

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
                    return (<Todo key={index.toString()} 
                    text={todo.label} 
                    index={index} 
                    handleRemoveTodo={handleRemoveTodo}
                />)})}
            </ul>
            <div className="d-flex flex-row w-100">
                <p className="list-group-item flex-fill text-start" id="count">
                    {footerText}
                </p>
                <p className="list-group-item flex-fill text-end" id="count">
                    {todos.length > 1 && <button id="clear-todos" onClick={handleRemoveAll}>Clear all tasks</button>}
                </p>
            </div>
        </div>
    )
}