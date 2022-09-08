import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const ProductCardInfo = ({product, getAllProductsCart}) => {

  const handleDeleteProduct=() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
    .then(res => getAllProductsCart())
    .catch(err => console.log(err))
  }
  return (
    <article className='cart__item'>
        <header className="cart__item-header">
          <h4 className='cart__category'>{product.brand}</h4>
          <h3 className='cart__subtitle'>{product.title}</h3>
        </header>
        <i onClick ={handleDeleteProduct}className="fa-solid fa-trash-can"></i>
        <span className='cart__quantity'>{product.productsInCart.quantity}</span>
        <div className='cart__content-total'>
            <span className="cart__total-label"><strong>Price: </strong>
              <span className="cart__total-number"> $ { product.price}</span>
            </span>
        </div>

    </article>
  )
}

export default ProductCardInfo