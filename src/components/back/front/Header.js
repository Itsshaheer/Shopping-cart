import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = ({cartitems}) => {
  return (
      <header className='header'>
<div>
    <h1>
        <Link to='/' className='logo'>
Electronics 
        </Link>
    </h1>
</div>
    
<div className='header-links'>
    <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
    </ul>
    <ul>
        <li>
            <Link to='/signup'>Signup</Link>
        </li>
    </ul>
    <ul>
        <li>
            <Link to='/cart' className='cart'><i class="fas fa-shopping-cart"></i>
            <span className='cart-length'>
                {cartitems.length === 0 ? "" :  cartitems.length}</span></Link>
        </li>
    </ul>
</div>
</header>
      
  )
}

export default Header