import { ADD_ITEM, CLEAR_ITEM_FROM_CART } from "./cart.types";
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
        
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                    )
            }
        default:
            return state;
    }
}

export default cartReducer;