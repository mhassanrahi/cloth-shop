import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.style.css';
import logo from '../../logo.svg'
import CartIcon from '../cart-icon/cart-icon.component';

import {auth} from '../../firebase/firebase.utils';


const Header = ({currentUser}) => {
    return (
        <nav className="navbar white-text mt-0 navbar-expand-lg navbar-dark indigo">
        <Link to='/' className="navbar-brand mr-2">
            <img src={`${logo}`} alt='logo'/>
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
    <ul className="navbar-nav ml-auto my-auto align-items-md-center">
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
          <Link className="nav-link" to="/cart" >
            <CartIcon />
          </Link>

        </li>
        
      </ul>
  </div>
</nav>


    );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps) (Header);