import React from 'react'
import './checkout-item.style.css'
const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => {
    return (
            <tr>
                <td className="image-container">
                    <img src={imageUrl} alt='item' />
                </td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>&#10006;</td>
            </tr>
    )
}

export default CheckoutItem;
