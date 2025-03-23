import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const DelTodo = () => {
    const {todo} = useContext(TodoContext)
    const {setTodo} = useContext(TodoContext)

    const deleteIt = (id)=>{
        const filterTodo = todo.filter((todos)=>todos.id!==id)
        setTodo(filterTodo)
    }
  return (
    <div>
        {
            todo.map((todos)=>(
                <div key={todos.id}>
                <h1>{todos.title}</h1>
                     <button onClick={()=>deleteIt(todos.id)} className='border-2 border-red-300'>Delete </button>
                </div>
            ))
        }
    </div>
  )
}

export default DelTodo