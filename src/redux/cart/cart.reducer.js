import { ADD_ITEM } from "./cart.types";
import { addItemToCart } from "./cart.utils";


const initialState = {
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;