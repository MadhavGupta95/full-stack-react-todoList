import React, { useState } from 'react'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Todo from './components/Todo'
import Layer1 from './components2/Layer1'
import { TodoProvider } from './context/TodoContext'
import Todosap from './components2/Todosap'
import AddTodo from './components2/AddTodo'
import DelTodo from './components2/DelTodo'


export const Header = ({children})=>{
  return (

    <h1 className='text-red-300 font-black bg-blue-50'>
      {children}
    </h1>

  )
}

const App = () => {

  return (
    <>
    {/* <TodoProvider>
    <AddTodo />
    <DelTodo />
    </TodoProvider> */}

    <Routes>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Todo />}></Route>
      <Route path='*' element={<p>404 not found</p>}></Route>
    </Routes>
    </>
  )
}

export default App