import React, { useState } from 'react'
import MenuCard from '../components/cards/menu/MenuCard';
import { FiPlus } from 'react-icons/fi';
import '../assets/styles/HomeStyles.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteModal from '../components/cards/deleteModal/DeleteModal';

const Home = () => {

  const cuisines = useSelector((state) => state.menu)
  const [state, setState] = useState({
    deleteItemId: '',
    deleteModalOpen: true
  })

  const toggleDeleteModal = (delItemId) => {
    setState({ ...state, deleteModalOpen: !state.deleteModalOpen, deleteItemId: delItemId })
  }

  const menuList = cuisines.map((cuisine, index) => 
    <MenuCard name={cuisine.title} itemId={cuisine.id} desc={cuisine.description} toggleDel={toggleDeleteModal} price={cuisine.price} img={cuisine.image} key={index} />
  )

  return (
    <>
        <main>
          { state.deleteModalOpen && <DeleteModal toggler={toggleDeleteModal} dishId={state.deleteItemId} /> }
          <div id="menu">
            <div className="new-item">
              <Link to={'/new-item'} className='link'><FiPlus /> Add to menu</Link>
            </div>
            <div className="menu">
                {menuList}
            </div>
          </div>
        </main>
    </>
  )
}

export default Home