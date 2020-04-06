import React from 'react'
import './checkout-item.style.css'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
            <tr>
                <td className="image-container">
                    <img src={imageUrl} alt='item' />
                </td>
                <td>{name}</td>
                <td className="quantity">
                <span onClick={() => removeItem(cartItem)}> &#10094;</span>
                   <span>{quantity}</span> 
                <span onClick={() => addItem(cartItem)}>&#10095;</span>
                </td>
                <td>{price}</td>
                <td>
                    <span onClick={() => clearItem(cartItem)}>&#10006;</span>
                </td>
            </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps) (CheckoutItem);
