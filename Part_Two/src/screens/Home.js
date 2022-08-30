import React from 'react'
import menuDish from "../assets/images/menu dish.svg";
import drawSoup from "../assets/images/draw soup.svg";
import eggSauce from "../assets/images/fried egg sauce.svg";
import MenuCard from '../components/cards/menu/MenuCard';

const Home = () => {
  return (
    <>
        <header>
            <h1 className='txt-center'>Hello 👋, welcome admin</h1>
            <p className="header-text txt-center">Here are the menus for today</p>
        </header>

        <main>
            <div id="menu">
            <div className="menu">
                <MenuCard name={'jollof rice'} desc={'Fried potato/yam chips with egg sauce or any ...'} price={'1,500'} img={menuDish} />
                <MenuCard name={'swallow with draw soup'} desc={'Fried potato/yam chips with egg sauce or any ...'} price={'1,500'} img={drawSoup} />
                <MenuCard name={'jollof rice'} desc={'Fried potato/yam chips with egg sauce or any ...'} price={'1,500'} img={menuDish} />
                <MenuCard name={'fries with egg sauce'} desc={'Fried potato/yam chips with egg sauce or any ...'} price={'700'} img={eggSauce} />
                <MenuCard name={'jollof rice'} desc={'Fried potato/yam chips with egg sauce or any ...'} price={'1,500'} img={menuDish} />
                <MenuCard name={'jollof rice'} desc={'Fried potato/yam chips with egg sauce or any ...'} price={'1,500'} img={menuDish} />
            </div>
            </div>
        </main>
    </>
  )
}

export default Home