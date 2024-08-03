import React, { useState } from 'react'
import Nav from './components/Navbar/Nav'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {

  const [showLogin, SetShowLogin] = useState(false);

  return (
    <> 
    {showLogin ? <LoginPopup SetShowLogin={SetShowLogin}/> : <></>}
    <div className='app'>
      <Nav SetShowLogin={SetShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App