import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.css';
import logo from '../../logo.svg'


import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
    return (
        <nav className="navbar white-text mt-0 navbar-expand-lg navbar-dark indigo">
        <Link to='/'>
            <img className="navbar-brand" src={`${logo}`} alt='logo'/>
        </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/shop">Shop</Link>
      </li>
      
    </ul>
    {/* <span className="navbar-text">
      Navbar text with an inline element
    </span> */}
    <ul className="navbar-nav ml-auto my-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
        {
          currentUser ?
          (<Link className="nav-link" onClick={()=> auth.signOut()} >Sign Out</Link>)
          :
          (<Link className="nav-link" to="/sign" >Sign In</Link>)
        }
            
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/cart" >Cart(0)</Link>
        </li>
        {/* <li className="nav-item">
            <a className="nav-link" > <img className="cart" alt='cart' src={`${cart}`}></img></a>
        </li> */}
        {/* <a className="nav-link" > <img className="cart" alt='cart' src={`${cart}`}></img></a> */}
    </ul>
  </div>
</nav>


    );
}

export default Header;