import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';

import './cart-dropdown.style.css';
import {selectCartItems} from '../../redux/'

const CartDropDown = ({cartItems}) => {
    return (
        <div className="dropdown-menu dropdown-menu-right">
            <div className="menu">
                {
                    cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem} />
                    )
                }
            </div>
            {
                (cartItems.length > 0) ? 
                (
                <div>
                    <div class="dropdown-divider"></div>
                    <button className="btn btn-indigo btn-sm"> Go to checkout</button>
                
                </div>)
                :
                <div className="text-center text-danger">Cart is empty.</div>
            }
            
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps, null)(CartDropDown);
