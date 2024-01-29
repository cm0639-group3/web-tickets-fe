import {REQUEST_GET_CART, SET_CART, CartActions} from "./actions";
import {CartState} from "./types";

const initialCartState: CartState = Object.freeze({
    cart: [],
});

export const cartReducer = (state = initialCartState, action: CartActions) => {
    switch (action.type) {
        case REQUEST_GET_CART:
            return state;
        case SET_CART:
            return {
                ...state,
                cart: action.payload.results,
                previous: action.payload?.previous,
                next: action.payload?.next,
            }
        default:
            return state;
    }
}
