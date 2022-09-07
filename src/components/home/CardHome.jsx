import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const CardHome = ({product}) => {
    //console.log(product)
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate(`/product/${product.id}`)
    }

    const handleAddToCard =(e) =>{
        e.stopPropagation()
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
        const obj ={
            id:product.id,
            quantity: 1
        }
        axios.post(URL,obj, getConfig())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
  return (
    <article className='card-home' onClick={handleClick}>
        <header className='card-home__header'>
            <img className='card-home__img' src={product.productImgs[0]}/>
        </header>
        <div className="card-home__body">
            <h3 className='card-home__name'>{product.title}</h3>
        </div>
        <section className='card-home__price'>
            <h4 className="card-home__price-label">Price</h4>
            <span className="card-home__price-value">{product.price}</span>
        </section>
        <button className='card-home__btn' onClick={handleAddToCard}>
            <i className="fa-solid fa-cart-shopping"></i>
        </button>
    </article>
  )
}

export default CardHome