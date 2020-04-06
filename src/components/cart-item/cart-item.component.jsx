import React from 'react';
import './cart-item.style.css';

const CartItem = ({item: {name, price, imageUrl, quantity} }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <div className='name'>{name}</div>
                <div className='price'>
                {quantity} x ${price}</div>
            </div>
        </div>
    )
}

export default CartItem;
