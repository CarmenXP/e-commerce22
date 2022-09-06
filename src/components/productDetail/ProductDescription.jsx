import React,{useState} from 'react'

const ProductDescription = ({productInfo}) => {
 
    const [counter, setCounter] = useState(1)
    const handlePlus = () => setCounter(counter +1)
    const handleMinus = () => {
        if(counter-1 >= 1){
            setCounter(counter - 1)
        }
    }
  return (
    <div className="detail-container">
        
            <div className="carousel__content">
                
                <i className="fa-solid fa-chevron-left"></i>
                <div className="image__carousel">
                    <img className ='carousel__detail-img'src={productInfo?.productImgs[0]} alt="" />
                </div>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        
    
        <section className='product-info'> 
            <h2 className="product-info__name">{productInfo?.title}</h2>
            <p className='product-info__description'>{productInfo?.description}</p>
        <div className="product-info__body">
                <article className="product-info__price">
                    <h3 className="product-info__price-label">Price</h3>
                    <span className="product-info__price-value">{productInfo?.price}</span>
                </article>
                <article className="product-info__quantity">
                    <h3 className="product-info__quantity-labe">Quantity</h3>
                    <span className="product-info__quantity-btns">
                        <button onClick={handleMinus}>-</button>
                            <span>{counter}</span>
                        <button onClick={handlePlus}>+</button>
                    </span>

                </article>
            </div>
            <button className='product-info__btn-add'>Add to cart <i className="fa-solid fa-cart-shopping"></i></button>
        </section>
   </div>
  )
}

export default ProductDescription