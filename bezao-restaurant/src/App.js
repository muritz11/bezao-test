import './assets/styles/GeneralStyles.css';
import './assets/styles/App.css';
import Nav from './components/nav/Nav';
import { FiSearch } from "react-icons/fi";
import HeaderDish from "./assets/images/header dish.svg";
import vector1 from "./assets/images/Vector 1306.svg";
import vector2 from "./assets/images/Vector 1307.svg";
import menuDish from "./assets/images/menu dish.svg";
import blogDish from "./assets/images/blog dish.svg";
import footerLogo from "./assets/images/footer logo.svg";
import { useState } from 'react';
import MenuTab from './components/tab/MenuTab';
import MenuCard from './components/cards/menu/MenuCard';
import TestimonialCard from './components/cards/testimonial/TestimonialCard';
import customer from './assets/images/customer.svg';
import BlogPostCard from './components/cards/blogpost/BlogPostCard';
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import SideNav from './components/nav/SideNav';

function App() {

  const [state, setState] = useState({
    search: '',
    navToggle: false,
  })

  const toggleNav = () => {
    setState({ ...state, navToggle: !state.navToggle })
  }

  return (
    <>
      <Nav toggler={toggleNav} />
      <header id="header">
        <section className='header-content'>
          <div className="copy">
            <h1 className='fs-lg-64'>Delicious meals at your convenience</h1>
            <p className="subtext fs-12 fw-200">Order your meals from us and we will have it delivered at your doorstep.</p>
            <button className="primary-btn d-md-show header-cta">Get started</button>
          </div>
          <form id="search" className='d-md-none'>
            <label>Instant Order</label>
            <div className='search-input-container'>
              <FiSearch className='search-icon' />
              <input type="text" placeholder='Search for meal' value={state.search} onChange={(e) => setState({...state, search: e.target.value})} />
            </div>
          </form>
          <div className="txt-center image">
            {/* TODO add spin animation to img */}
            <img src={HeaderDish} className="header-dish" alt='' />
          </div>
        </section>
        <img src={vector1} className="header-vector1 d-md-none" alt='' />
        <img src={vector2} className="header-vector2 d-md-none" alt='' />
      </header>

      <section id="menu">
        <h4 className='fs-14 fw-700 txt-tomato mb-8'>MENU</h4>
        <h2 className='fs-24 fw-700'>Current menu</h2>
        <MenuTab />
        <div className="menu">
          <MenuCard name={'jollof rice'} desc={'Fried potato/yam chips with egg sauce or any ...'} price={'1,500'} img={menuDish} />
          <MenuCard name={'jollof rice'} desc={'Fried potato/yam chips with egg sauce or any ...'} price={'1,500'} img={menuDish} />
          <MenuCard name={'jollof rice'} desc={'Fried potato/yam chips with egg sauce or any ...'} price={'1,500'} img={menuDish} />
          <MenuCard name={'jollof rice'} desc={'Fried potato/yam chips with egg sauce or any ...'} price={'1,500'} img={menuDish} />
        </div>
        <div className="txt-center">
          <button className='primary-btn'>full menu</button>
        </div>
      </section>

      <section id="testimonials">
        <h2 className='fs-24 fw-700 mb-8'>What our customers say about us</h2>
        <p className="fs-12 txt-dark">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
        
        <div className="testimonials">
          <TestimonialCard 
            img={customer} 
            name={'john samson'} 
            location={'Enugu, Nigeria'} comment={'White dwarf a still more glorious dawn awaits tingling of the spine emerged into consciousness Vangelis shores of the cosmic ocean. '} 
          />
        </div>
        <div className="dots txt-center">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      <section id="blog">
        <h2 className='fs-24 fw-700 mb-8 txt-center'>Blog Our Latest News</h2>
        <p className="fs-14 txt-dark txt-center">Have you ever browsed food blogs like mine and wondered how to start a food blog of your very own? </p>
        
        <div className="blogposts">
          <BlogPostCard 
            name={'better than takeout kunf pao chicken'} 
            desc={'This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe'} 
            img={blogDish} 
          />
          <BlogPostCard 
            name={'better than takeout kunf pao chicken'} 
            desc={'This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe'} 
            img={blogDish} 
          />
          <BlogPostCard 
            name={'better than takeout kunf pao chicken'} 
            desc={'This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe'} 
            img={blogDish} 
          />
        </div>
      </section>

      <footer>
        <div className="footer-logo">
          <img src={footerLogo} alt="footer logo" />
          <span className="logo-text fs-35 fw-800">Meals</span>
        </div>
        <div className='quick-links'>
            <div className="">
              <h4 className='ql-mb'>Company</h4>
              <p className='ql-mb'><a href="/">Blog</a></p>
              <p className='ql-mb'><a href="/">About us</a></p>
              <p className='ql-mb'><a href="/">Contact us</a></p>
            </div>
            <div className="">
              <h4 className='ql-mb'>Services</h4>
              <p className='ql-mb'><a href="/">FAQs</a></p>
              <p className='ql-mb'><a href="/">Our Menu</a></p>
            </div>
        </div>
        <div className="socials">
          <a href="/"><GrFacebookOption className='facebook' /></a>
          <a href="/"><AiFillInstagram className='instagram' /></a>
          <a href="/"><AiOutlineTwitter className='twitter' /></a>
        </div>
        <hr />
        <p className='arr fs-12 txt-dark'>© 2022 Meals. All rights reserved.</p>
      </footer>

      {state.navToggle && <SideNav toggler={toggleNav} />}
      {/* TODO add chat widget */}
    </>
  );
}

export default App;
