import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Header } from '../App';

const Todosap = () => {
    const {todo} = useContext(TodoContext)
    console.log(todo);
    
  return (
    <div>
        {todo.map((todos)=>(
            <div key={todos.id}>
                <p >{todos.title}</p>
                <p>{todos.important}</p>
            </div>
        ))}
    </div>
    
  )
}

export default Todosap