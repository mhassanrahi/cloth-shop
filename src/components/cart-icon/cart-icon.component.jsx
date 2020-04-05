import React from 'react';
import { connect } from 'react-redux';

import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {selectCartItemsCount } from '../../redux/';


const CartIcon = ({itemCount}) => {
    return (
            <div>
                <div class="btn-group dropdown">
                <button type="button" class="btn btn-outline-white dropdown-toggle p-1 m-0" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <i className="fas fa-shopping-basket fa-2x"> 
                        <span className="font-weight-light"> {itemCount}</span>
                    </i>
                </button>
                <CartDropDown />
                </div>
            </div>
    )
}

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps) (CartIcon);
