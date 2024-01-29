import {Ticket} from "../../models/tickets";
import {DefaultRootState} from "react-redux";

interface SelectCart {
    cart: Ticket[];
}

export const selectCart = (state: DefaultRootState): SelectCart => ({
    cart: state.cart.cart,
});
