import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductDescription from '../productDetail/ProductDescription'
import SimilarItemCard from '../productDetail/SimilarItemCard'


const ProductDetail = () => {
  const {id} = useParams()
  const [productInfo, setProductInfo] = useState()
  const products = useSelector(state => state.products)
 
 
  useEffect(() => {
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
      axios.get(URL)
        .then(res => setProductInfo(res.data.data.product))
        .catch(err => console.log(err))

  }, [id])
  console.log('PRODUCT-INFO',productInfo)
  console.log('ALL PRODUCTS', products)

  const filteredProducts = products?.filter(product => product.category.name == productInfo?.category)
  console.log("similarItems", filteredProducts)

  return (
    <div>
      <ProductDescription
        key={id}
        productInfo={productInfo}
      />
      <div className="similar-items">
        <h2>Similar items</h2>
        <div className="similar-items__content-cards">
          {
            filteredProducts?.map(filteredProduct => (
              <SimilarItemCard
                key={filteredProduct.id}
                product={filteredProduct}
              
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductDetail