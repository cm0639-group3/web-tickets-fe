import {ContentHeader} from "../../components/ContentHeader/ContentHeader";
import {Button} from "../../components/Button/Button";
import {TicketInfo} from "./TicketInfo";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentFlight, selectListOfLuggage, selectLuggage} from "../../store/flights/selectors";
import css from "./AddToCartPage.module.scss";
import { useParams } from "react-router-dom";
import { requestGetFlightById, requestGetListOfLuggage  } from "../../store/flights/actions";
import {addFlightToCart} from "../../crud/flights.crud";
import {ListOfLuggage} from "./ListOfLuggage/ListOfLuggage";

export const AddToCartPage = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const { currentFlight } = useSelector(selectCurrentFlight);
    const { listOfLuggage } = useSelector(selectListOfLuggage);
    const { luggage } = useSelector(selectLuggage);

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentFlight && id) {
            dispatch(requestGetFlightById(id));
            dispatch(requestGetListOfLuggage({}));
        }
    }, [currentFlight, id]);

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    const handleAddToCartButton = () => {
        if (currentFlight) {
            addFlightToCart(currentFlight.id, currentFlight);
        }
    }

    return currentFlight ? (<div>
        <ContentHeader label={<div>Add this ticket to Cart: <span className={css.contentHeaderFlightName}>{currentFlight?.name}</span></div>}
           content="Below there is an information about chosen ticket. If everything correct click the add to cart button"
        />
        <TicketInfo
            flight={currentFlight}
        />
        {listOfLuggage && <ListOfLuggage listOfLuggage={listOfLuggage} />}
        <div className={css.buttonsToBuy}>
            <Button
                className={css.addToCartButton}
                disabled={!luggage || !currentFlight}
                onClick={handleAddToCartButton}
                type="submit" btnType="primary">Add to cart
            </Button>
        </div>
    </div>) : <div className={css.loader}> Loading... </div>;
}
