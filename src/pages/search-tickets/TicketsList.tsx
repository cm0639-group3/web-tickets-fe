import css from "./TicketsList.module.scss";
import { v4 as uuid } from "uuid";
import {Button} from "../../components/Button/Button";
import ReactPaginate from 'react-paginate';
import {FC} from "react";
import {Tickets} from "./SearchTicketsPage";

interface TicketsListProps {
    tickets: Tickets,
}

export const TicketsList: FC<TicketsListProps> = ({tickets}) => {
    return (<div className={css.ticketsList}>
        <div>
            {tickets.map((ticket) => <div  key={uuid()} className={css.ticket}>
            <p>
                <label>Transfers</label>
                {ticket.transfers.map(transfer => {
                    return (<p className={css.ticketTransfer}>
                        <p><b>{transfer.departmentTimeAndDate}</b> <i>{transfer.departmentCity}</i> : <b>{transfer.arrivalTimeAndDate}</b> <i>{transfer.arrivalCity}</i></p>
                    </p>)
                })}</p>
                <p className={css.ticketPrice}>
                    {ticket.price}
                    <Button className={css.ticketBuyButton} btnType="primary">Buy</Button>
                </p>
            </div>
        )}
        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={()  => {}}
            pageRangeDisplayed={5}
            pageCount={5}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    </div>);
}
