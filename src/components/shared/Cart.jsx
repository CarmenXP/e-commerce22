import axios from 'axios'
import React,{useEffect, useState} from 'react'
import ProductCardInfo from '../cart/ProductCardInfo'
import getConfig from '../../utils/getConfig'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()

    const getAllProductsCart = () =>{
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getConfig())
        .then(res => setCartProducts(res.data.data.cart.products))
        .catch(err => setCartProducts())
    }
    useEffect(() => {
        getAllProductsCart()

        }, []) 

        console.log(cartProducts)

    const handleCheckout = () =>{
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const obj = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            city: "USA",
            references: "Some references"
            } 
        axios.post(URL, obj, getConfig())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }    
  return (
    <article className="cart">
        <h2 className='cart__title'>Cart</h2>
        <div >
            {
                cartProducts?.map(product => (
                    <ProductCardInfo
                        key={product.id}
                        product={product}
                        getAllProductsCart={getAllProductsCart }
                    />
                ))
            }
        </div>
        
        <hr className="cart__hr" />
        <footer className="cart__footer">
            <span className="cart__total-global-label">Total</span>
            <p className="cart__total-global-value">1350</p>
            <button className="cart__btn" onClick={handleCheckout}>Checkout</button>
        </footer>
    </article>
  )
}

export default Cart