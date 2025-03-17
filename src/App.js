import React from 'react'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Todo from './components/Todo'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<Todo/>}></Route>
        <Route path='*' element={<h1>404 not found</h1>}></Route>
      </Routes>
    </>
  )
}

export default App