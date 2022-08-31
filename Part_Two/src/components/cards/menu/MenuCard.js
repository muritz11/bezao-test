import React from 'react'
import './MenuCard.css'
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const MenuCard = ({ name, price, img, desc, toggleDel, itemId }) => {

  const navigate = useNavigate()

  const redirectToEdit = (index) => {
    navigate('/edit', { state: {itemId: index} })
  }

  return (
      <div className="menu-card">
        <img src={img} alt={name} />
        <div className="content">
            <h4 className='fs-14 fw-700 txt-capitalize'>{name}</h4>
            <p className='fs-10 fw-400 txt-dark'>{desc}</p>
            <div className='price-container'>
                <p className="fs-14 fw-400 txt-dark">&#8358; {price.toLocaleString('en-US')}</p>
                <div className='action-btns'>
                  <button onClick={() => {redirectToEdit(itemId)}}><FiEdit className='fs-20 edit' /></button>
                  <AiOutlineDelete onClick={() => {toggleDel(itemId)}} className='fs-20 delete' />
                </div>
            </div>
        </div>
      </div>
  )
}

export default MenuCard