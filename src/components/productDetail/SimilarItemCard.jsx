import { useNavigate } from "react-router-dom"


const SimilarItemCard = ({product, setItemCardId}) => {

    const navigate = useNavigate()

    const handleGetID = () =>{
      console.log(  navigate(`/product/${product.id}`))

        
    }    
  return (
    <article className='card-similarItem' onClick={handleGetID}>
        <header className='card-similarItem__header'>
            <img className='card-similarItem__img' src={product.productImgs[0]}/>
        </header>
        <div className="card-similarItem__body">
            <h3 className='card-similarItem__name'>{product.title}</h3>
        </div>
        <section className='card-similarItem__price'>
            <h4 className="card-similarItem__price-label">Price</h4>
            <span className="card-similarItem__price-value">{product.price}</span>
        </section>
        <button className='card-similarItem__btn'>
            <i className="fa-solid fa-cart-shopping"></i>
        </button>
    </article>
  )
}

export default SimilarItemCard