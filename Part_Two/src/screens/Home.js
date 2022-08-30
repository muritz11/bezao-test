import React from 'react'
import MenuCard from '../components/cards/menu/MenuCard';
import { FiPlus } from 'react-icons/fi';
import '../assets/styles/HomeStyles.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {

  const cuisines = useSelector((state) => state.menu)

  const menuList = cuisines.map((cuisine, index) => 
    <MenuCard name={cuisine.title} desc={cuisine.description} price={cuisine.price} img={cuisine.image} key={index} />
  )

  return (
    <>
        <main>
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