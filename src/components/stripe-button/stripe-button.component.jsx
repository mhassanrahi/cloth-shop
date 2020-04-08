import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import logo from '../../logo.svg'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_tBQryp0rhG7iLOGxC1ucCW4x00hnhOOi7Y';

    const onToken = token => {
        console.log(token)
        alert('Payment successful.')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Cloth Shop Ltd.'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
