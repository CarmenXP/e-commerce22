import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'
import CardHome from '../home/CardHome'
import Menu from '../home/Menu'
import SearchBar from '../home/SearchBar'

const Home = () => {
  const [inputValue, setInputValue] = useState()
  const [productsFiltered, setProductsFiltered] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  useEffect(()=>{
    if(inputValue !== undefined){
      const filterProduct = products?.filter(product =>(
        product.title.toLowerCase().includes(inputValue?.value.toLowerCase()) ||
        product.description.toLowerCase().includes(inputValue?.value)
      ))
        setProductsFiltered(filterProduct)
    }
  },[inputValue])
  //console.log('INPUTVALUE',inputValue.value)
  const products = useSelector(state => state.products)


     console.log(productsFiltered, '....Filtrados')
  return (
    <div className='home'>
      <Menu/>
      <div className="home__container">
        <SearchBar
          setInputValue={setInputValue}
        />
        <div className="home__container-card">
          {
            productsFiltered
            ?
            productsFiltered.map(product=>(
              <CardHome
                key={product.id}
                product={product}
              />
            ))
            :
            products?.map(product =>(
              <CardHome
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home