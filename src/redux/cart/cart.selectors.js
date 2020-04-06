import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulativeQty, cartItem) => accumulativeQty + cartItem.quantity, 0)

)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulativeQty, cartItem) => accumulativeQty + cartItem.quantity * cartItem.price, 0)
)