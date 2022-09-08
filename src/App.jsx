
import {Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Routes/Home'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from '../src/components/shared/Header'
import Cart from './components/shared/Cart'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import Footer from './components/shared/Footer'

function App() {
  
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
        <Route element={<ProtectedRoutes/>}>
          <Route path='/purchases' element ={<Purchases/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
