import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className="row">
           <table className="table col-md-8 offset-md-2">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
            {
                cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
                <tr className="border-top-primary">
                    <th colSpan='5' className="text-center lead">Total: ${total}</th>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
