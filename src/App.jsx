import { useState } from 'react'
import {NavLink,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Routes/Home'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from '../src/components/shared/Header'
import { useEffect } from 'react'
import axios from 'axios'
import Cart from './components/shared/Cart'

function App() {
  const [count, setCount] = useState(0)
/*  creando un usuario
  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
    const obj ={
      firstName:'Carmen',
      lastName:'XP',
      email: 'carmen_carmen@hotmail.com',
      password:'12345678',
      phone: '5540510000',
      role:'admin',
    }
    axios.post(URL, obj)
    .then(res => console.log(res.data))
    .catch(err=> console.log(err))
  }, [])
  */

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/product/:id' element ={<ProductDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/purchases' element ={<Purchases/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
