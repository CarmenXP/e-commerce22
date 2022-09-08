import React from 'react'

const FormLogout = ({setIsLog, isLog}) => {
    const handleClick = () => {
        setIsLog()
        localStorage.removeItem('token')
      }
  return (
    <article className='form-logout'>
        <div className="logout-icon">
            <i className="form-logout__icon fa-solid fa-user"></i>
        </div>
        <h2 className='form-logout__username'>
            {`${isLog?.firstName} ${isLog?.lastName}`}
        </h2>
        <button onClick={handleClick} className='form-logout__btn'>Log out</button>
    </article>
  )
}

export default FormLogout