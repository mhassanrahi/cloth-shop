import React from 'react';

const CartDropDown = () => {
    return (
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <button className="btn btn-indigo btn-sm"> Go to checkout</button>
        </div>
    )
}

export default CartDropDown;
