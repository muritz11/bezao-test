import './assets/styles/GeneralStyles.css';
import './assets/styles/App.css';
import Nav from './components/nav/Nav';
import { FiSearch } from "react-icons/fi";
import HeaderDish from "./assets/images/header dish.svg";
import vector1 from "./assets/images/Vector 1306.svg";
import vector2 from "./assets/images/Vector 1307.svg";
import { useState } from 'react';

function App() {

  const [state, setState] = useState({
    search: ''
  })

  return (
    <>
      <Nav />
      <header id="header">
        <section className='header-content'>
          <h1>Delicious meals at your convenience</h1>
          <p className="subtext fs-12 fw-200">Order your meals from us and we will have it delivered at your doorstep.</p>
          <form id="search">
            <label>Instant Order</label>
            <div className='search-input-container'>
              <FiSearch className='search-icon' />
              <input type="text" placeholder='Search for meal' value={state.search} onChange={(e) => setState({...state, search: e.target.value})} />
            </div>
          </form>
          <div className="txt-center">
            <img src={HeaderDish} className="header-dish" />
          </div>
        </section>
        <img src={vector1} className="header-vector1" />
        <img src={vector2} className="header-vector2" />
      </header>
    </>
  );
}

export default App;
