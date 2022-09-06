import React from 'react'

const Menu = () => {
  return (
    <aside className='aside-menu'>
        
            <form className='filter-price'>
                <h3 className="filter-price__title">Price</h3>
                <hr />
                <div className="content-input">
                    <label className='input-label'>From</label>
                    <input  className='enter-price'type="text" />
                </div>
                <div className="content-input">
                    <label className='input-label to'>To</label>
                    <input className='enter-price' type="text" />
                </div>
                <button className='filter-price__btn'> Filter price</button>
            </form>
        
        <div className="menu-category">
            <h3 className="title-category">Category</h3>
            <hr />
            <span className="articles-category">Smart TV</span>
            <span className="articles-category">Computers</span>
            <span className="articles-category">Smartphones</span>
        </div>
    </aside>
  )
}

export default Menu