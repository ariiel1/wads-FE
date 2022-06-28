import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'


export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ='/' element = {<Home/>}/>
            <Route path ='/register' element = {<Register/>}/>
            <Route path ='/login' element = {<Login/>}/>
            <Route path ='/checkout' element = {<Checkout/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App