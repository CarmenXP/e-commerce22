import React from 'react'
import { useForm } from 'react-hook-form'

const SearchBar = ({setInputValue}) => {
    const{reset, handleSubmit, register}=useForm()
    const submit = (data) => setInputValue(data)
  return (
        <form className='searchBar' onSubmit={handleSubmit(submit)}>
            <span>
                <input {...register('value')}className='input__searchBar'type="text" placeholder='What are you looking for?'/>
                <button className='searchBar__btn'><i className="fa-solid fa-magnifying-glass"></i></button>
            </span>
        </form>
  )
}

export default SearchBar