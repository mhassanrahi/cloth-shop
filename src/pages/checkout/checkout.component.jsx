import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => {
    const d = new Date();
    const month = ("0" + (d.getMonth() + 1)).slice(-2)
    const year = d.getFullYear().toString().slice(-2)

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
                <tr className="text-center">
                    <td colSpan='3' className="lead">Total: ${total}</td>
                    <td colSpan='2'><StripeCheckoutButton price={total} /></td>
                </tr>
                <tr>
                    <td colSpan='5' className="text-danger lead">
                        *Please use the following test card for payments*
                        <br/>
                        Card number: 4242 4242 4242 4242
                        <br />
                        Exp: {month} / {year} - CVV: 123
                    </td>
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
