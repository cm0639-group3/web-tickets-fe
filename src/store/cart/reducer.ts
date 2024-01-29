import {CartActions, REQUEST_BUY_CART_TICKET, REQUEST_GET_CART, SET_CART} from "./actions";
import {CartState} from "./types";

const initialCartState: CartState = Object.freeze({
    cart: [],
});

export const cartReducer = (state = initialCartState, action: CartActions) => {
    switch (action.type) {
        case REQUEST_GET_CART:
        case REQUEST_BUY_CART_TICKET:
            return state;
        case SET_CART:
            return {
                ...state,
                cart: action.payload.results,
            }
        default:
            return state;
    }
}
