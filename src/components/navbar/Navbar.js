import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

export const Navbar = () => {
  const [menu, setMenu] = React.useState('shop')
  return (
    <div className='navbar'>
      <div className='nav-logo'>
          <img src={logo} alt=''/>
          <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => {setMenu('shop')}}>Shop {menu === 'shop' ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu('mens')}}>Men {menu === 'mens' ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu('womens')}}>Women {menu === 'womens' ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu('kids')}}>Kids {menu === 'kids' ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
          <button>Login</button>
          <img src={cart_icon} alt=''></img>
          <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}
