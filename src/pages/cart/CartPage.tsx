import {ContentHeader} from "../../components/ContentHeader/ContentHeader";
import css from "./CartPage.module.scss"
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCart} from "../../crud/cart.crud";
import {requestGetCart} from "../../store/cart/actions";

export const CartPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestGetCart({}));
    }, []);

    return (<div>
        <ContentHeader label={<div>Cart Page</div>}
                       content="Here there is you cart"
        />

    </div>);
}
