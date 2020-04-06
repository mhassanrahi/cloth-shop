import React from 'react'
import './checkout-item.style.css'
import { connect } from 'react-redux'
import { clearItemFromCart } from '../../redux'

const CheckoutItem = ({cartItem, clearItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
            <tr>
                <td className="image-container">
                    <img src={imageUrl} alt='item' />
                </td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>
                    <button onClick={() => clearItem(cartItem)}>&#10006;</button>
                </td>
            </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps) (CheckoutItem);
