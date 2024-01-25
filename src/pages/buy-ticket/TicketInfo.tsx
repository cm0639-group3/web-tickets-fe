import css from "./TicketInfo.module.scss";
import {v4 as uuid} from "uuid";
// import {tickets} from "../search-tickets/SearchTicketsPage";

export const TicketInfo = () => {
    return (<div>
        <div  key={uuid()} className={css.ticket}>
            {/*<p>*/}
            {/*    <label>Transfers</label>*/}
            {/*    {tickets[0].transfers.map(transfer => {*/}
            {/*        return (<p className={css.ticketTransfer}>*/}
            {/*            <p><b>{transfer.departmentTimeAndDate}</b> <i>{transfer.departmentCity}</i> : <b>{transfer.arrivalTimeAndDate}</b> <i>{transfer.arrivalCity}</i></p>*/}
            {/*        </p>)*/}
            {/*    })}</p>*/}
            {/*<p className={css.ticketPrice}>*/}
            {/*    {tickets[0].price}*/}
            {/*</p>*/}
        </div>
    </div>);
}
