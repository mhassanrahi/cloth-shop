import { ADD_ITEM, CLEAR_ITEM_FROM_CART } from "./cart.types";

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
})