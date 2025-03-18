import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const Layer3 = ({/*todo*/}) => {
    /*console.log(todo);*/
    const todoContext = useContext(TodoContext)
    console.log(todoContext);
    
  return (
    <>
        <h1 className='text-pink-500'>Layer three</h1>
    </>
  )
}

export default Layer3