import React from 'react';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';


const CartIcon = () => {
    return (
            <div>
                <div class="btn-group dropdown">
                <button type="button" class="btn btn-outline-white dropdown-toggle p-2 ml-0" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <i className="fas fa-shopping-basket fa-2x"> 
                        <span className="font-weight-light"> 12</span>
                    </i>
                </button>
                <CartDropDown />
                </div>
            </div>
    )
}

export default CartIcon;
