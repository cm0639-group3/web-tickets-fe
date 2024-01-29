import {ContentHeader} from "../../components/ContentHeader/ContentHeader";
import css from "./CartPage.module.scss"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestGetCart} from "../../store/cart/actions";
import {selectCart} from "../../store/cart/selectors";
import {CartTicketsList} from "./CartTicketsList";

export const CartPage = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(selectCart);

    useEffect(() => {
        dispatch(requestGetCart({}));
    }, []);

    return (<div>
        <ContentHeader label={<div>Cart</div>}
           content="Here there is your cart"
        />
        <CartTicketsList cart={cart} />
    </div>);
}
