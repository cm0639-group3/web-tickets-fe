import css from "./CartTicketsList.module.scss";
import {Ticket} from "../../models/tickets";
import {FC} from "react";
import { v4 as uuid } from "uuid";
import {Button} from "../../components/Button/Button";
import {requestBuyCartTicket} from "../../store/cart/actions";
import {useDispatch} from "react-redux";

interface CartTicketsListProps {
    cart: Ticket[];
}

export const CartTicketsList: FC<CartTicketsListProps> = ({ cart }) => {
    const dispatch = useDispatch();

    const handleBuyTicketButton = (ticket: Ticket) => {
        dispatch(requestBuyCartTicket(ticket));
    };
    return (<div>
        {
            cart.map(ticket => {
                return (<div className={css.cartTicket} key={uuid()}>
                    <div className={css.cartTicketPrice}><b>Current Price:</b> {ticket.current_price}</div>
                    <div className={css.cartTicketFlightId}><b>Flight Id:</b> {ticket.flight}</div>
                    {ticket.is_purchased ? <div className={css.cartTicketBought}>
                        You have bought the ticket already
                    </div> :
                    <Button
                        onClick={() => handleBuyTicketButton(ticket)}
                        type="submit" btnType="primary">
                        Buy this ticket
                    </Button>
                    }
                </div>)
            })
        }
    </div>)
}
