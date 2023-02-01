import React, {useState, useEffect} from "react";
import axios from "axios";
import Todo from "./TodoItem.jsx"

export default function TodoList () {
    const [todos,setTodos] = useState([]);

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

    useEffect(() => {
        addData();
    }, [todos]);

    return (
        <ul className="m-0 ps-4 d-flex flex-column align-items-start">
        {todos.map((todo,index) => {
            return (<Todo key={index.toString()} 
            text={todo.label} 
            index={index} 
            handleRemoveTodo={handleRemoveTodo}
        />)})}
    </ul>
    )

}