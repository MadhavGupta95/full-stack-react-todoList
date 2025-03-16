import React from 'react'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </>
  )
}

export default App