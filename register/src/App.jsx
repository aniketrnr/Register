import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sign_up from './Sign_up'
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './Dash_Board';


function App() {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/register' element={<Sign_up />}></Route>
    <Route path='/login'  element={<Login />}></Route>
    <Route path='/dashboard'  element={<Dashboard />}></Route>
  </Routes>
  </BrowserRouter>

  )
}

export default App
