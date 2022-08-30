import React from 'react'
import MenuCard from '../components/cards/menu/MenuCard';
import { FiPlus } from 'react-icons/fi';
import '../assets/styles/HomeStyles.css'
import { useSelector } from 'react-redux';

const Home = () => {

  const cuisines = useSelector((state) => state.menu)

  const menuList = cuisines.map((cuisine, index) => 
    <MenuCard name={cuisine.title} desc={cuisine.description} price={cuisine.price} img={cuisine.image} key={index} />
  )

  return (
    <>
        <header>
            <h1 className='txt-center'>Hello 👋, welcome admin</h1>
            <p className="header-text txt-center">Here are the menus for today</p>
        </header>

        <main>
            <div id="menu">
              <div className="new-item">
                <button><FiPlus /> Add to menu</button>
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