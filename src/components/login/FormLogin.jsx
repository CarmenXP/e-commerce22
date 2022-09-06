import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

const FormLogin = () => {

    const {register, reset, handleSubmit}=useForm()
    const submit = (data) =>{
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login '
        axios.post(URL, data)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.data.token)
        })
        .catch(err => console.log(err))
        
      /*  reset({
            emai: '',
            password: ''
        })*/
    }
  return (
    <form className='login__form' onSubmit={handleSubmit(submit)}>
        <h2 className='login__title'>Welcome! Enter your email and password to continue</h2>
        <div className='login__div-email'>
            <label className ='login__label'htmlFor="email">Email</label>
            <input {...register('email')}className ='login__input'type="email"  id='email'/>
        </div>
        <div className='login__div-password'>
            <label  className ='login__label' htmlFor="password">Password</label>
            <input {...register('password')} className ='login__input' type="password"  id='password'/>
        </div>
        <button className='login__btn'>Send</button>
    </form>
  )
}

export default FormLogin