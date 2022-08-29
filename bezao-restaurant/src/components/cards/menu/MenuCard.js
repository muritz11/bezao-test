import React from 'react'
import './MenuCard.css'
import { TbShoppingCartPlus } from "react-icons/tb";

const MenuCard = ({ name, price, img, desc }) => {
  return (
      <div className="menu-card">
        <img src={img} alt={name} />
        <div className="content">
            <h4 className='fs-14 fw-700 txt-capitalize'>{name}</h4>
            <p className='fs-10 fw-400 txt-dark'>{desc}</p>
            <div className='price-container'>
                <p className="fs-14 fw-700 txt-dark">&#8358; {price}</p>
                <button className="add-to-cart d-md-none">
                    <TbShoppingCartPlus />
                </button>
                <button className="primary-btn place-order">Place Order</button>
            </div>
        </div>
      </div>
  )
}

export default MenuCard