import React, { useState } from 'react'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Todo from './components/Todo'
import Layer1 from './components/Layer1'
import { TodoProvider } from './context/TodoContext'


export const Header = ({children})=>{
  return (

    <h1 className='text-red-300 font-black bg-blue-50'>
      {children}
    </h1>

  )
}

const App = () => {

  
//   const [todo, setTodo] = useState([{
//     id : 1,
//     title : "Todo-1",
//     completed : false
//   },
//   {
//     id : 2,
//     title : "Todo-2",
//     completed : false
//   },
//   {
//     id : 3,
//     title : "Todo-3",
//     completed : false
//   }
// ])

  return (
    <>

    <TodoProvider>

    <Layer1 /*todo={todo}*/ />

    </TodoProvider>
    
     
     
    </>
  )
}

export default App