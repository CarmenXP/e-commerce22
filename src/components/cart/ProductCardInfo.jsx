import React from 'react'

const ProductCardInfo = () => {
  return (
    <article className='cart__item'>
        <header className="cart__item-header">
        <h4 className='cart__category'>Samsung</h4>
        <h3 className='cart__subtitle'>Samsung Galaxy</h3>
        </header>
        <i class="fa-solid fa-trash-can"></i>
        <span className='cart__quantity'>1</span>
        <div>
            <span className="cart__total-label">Total:</span>
            <p className="cart__total-number">850</p>
        </div>

    </article>
  )
}

export default ProductCardInfo