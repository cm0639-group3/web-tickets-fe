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
            <div>
                <label>Transfers</label>
                {ticket.transfers.map(transfer => {
                    return (
                    <div key={uuid()} className={css.ticketTransfer}>
                        <div>
                            <b>{transfer.departmentTimeAndDate}</b>
                            <i>{transfer.departmentCity}</i> :
                            <b>{transfer.arrivalTimeAndDate}</b>
                            <i>{transfer.arrivalCity}</i>
                        </div>
                    </div>)})}
            </div>
                <div className={css.ticketPrice}>
                    {ticket.price}
                    <Button className={css.ticketBuyButton} btnType="primary">Buy</Button>
                </div>
            </div>
        )}
        </div>
        {/*<ReactPaginate*/}
        {/*    breakLabel="..."*/}
        {/*    nextLabel=">"*/}
        {/*    onPageChange={()  => {}}*/}
        {/*    pageRangeDisplayed={5}*/}
        {/*    pageCount={5}*/}
        {/*    previousLabel="<"*/}
        {/*    renderOnZeroPageCount={null}*/}
        {/*/>*/}
    </div>);
}
