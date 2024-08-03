import React, { useContext, useState } from 'react'
import './Nav.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import DataContext from '../../Contexts/DataContext';





const Nav = ({SetShowLogin}) => {

  const {getTotalCartAmount} = useContext(DataContext);

  var [menu, setMenu] = useState("");
  return (
    <div className='navbar'>
     <Link to='/'> <img src={assets.romato} alt="" className="logo" /> </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ''}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ''}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ''}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contactus")} className={menu === "contactus" ? "active" : ''}>contact us</a>
      </ul>
      <div className="navbar-right">
        {/* <img className='img' src={assets.search_icon} alt="" /> */}
        <div className="navbar-search-icon">
        <Link to='/cart'> <img className='img' src={assets.basket_icon} alt="" /> </Link>
          <div className={getTotalCartAmount() === 0 ? '' : "dot"}></div>
        </div>
        <button onClick={() => SetShowLogin(true)} id='button'>sign in</button>
      </div>
    </div>
  )
}

export default Nav;