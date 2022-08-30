import React from 'react'
import './MenuCard.css'
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MenuCard = ({ name, price, img, desc }) => {
  return (
      <div className="menu-card">
        <img src={img} alt={name} />
        <div className="content">
            <h4 className='fs-14 fw-700 txt-capitalize'>{name}</h4>
            <p className='fs-10 fw-400 txt-dark'>{desc}</p>
            <div className='price-container'>
                <p className="fs-14 fw-700 txt-dark">&#8358; {price}</p>
                <div className='action-btns'>
                  <Link to={'edit'}><FiEdit className='fs-20 edit' /></Link>
                  <AiOutlineDelete className='fs-20 delete' />
                </div>
                {/* <button className="primary-btn ">Place Order</button> */}
            </div>
        </div>
      </div>
  )
}

export default MenuCard