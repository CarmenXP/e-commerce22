import { useState } from 'react'
import {NavLink,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Routes/Home'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from '../src/components/shared/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/product/:id' element ={<ProductDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/purchases' element ={<Purchases/>}/>
      </Routes>
    </div>
  )
}

export default App
