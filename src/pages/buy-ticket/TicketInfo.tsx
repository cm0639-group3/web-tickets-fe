import css from "./TicketInfo.module.scss";
import {v4 as uuid} from "uuid";
import {Flight} from "../../models/flights";
import {FC} from "react";
import {Button} from "../../components/Button/Button";
import {flightDateFormat} from "../../helpers/flightDateFormat";
import {Link} from "react-router-dom";
// import {tickets} from "../search-tickets/SearchTicketsPage";

interface TicketInfoProps {
    flight: Flight;
}

export const TicketInfo: FC<TicketInfoProps> = ({ flight }) => {
    const { departureMinute, departureHour, departureTime,
        arrivalMinute, arrivalHour, arrivalTime } = flightDateFormat(flight);

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
            <div>
                <label>{flight.name}</label>
                <div key={uuid()} className={css.ticketTransfer}>
                    <div className={css.ticketDateInfo}>
                        <div>
                            <b><i>Departure Time:</i> {departureHour} : {departureMinute} </b>
                            <b><i>Departure Date:</i> {departureTime.getFullYear()+'-' +
                                (departureTime.getMonth()+1) + '-'+departureTime.getDate()}
                            </b>
                        </div>
                        {/*<b>{flight.departure_time}</b>*/}
                        <div>
                            <b><i>Arrival Time:</i> {arrivalHour} : {arrivalMinute} </b>
                            <b><i>Arrival Date:</i> {arrivalTime.getFullYear()+'-' +
                                (arrivalTime.getMonth()+1) + '-'+arrivalTime.getDate()}
                            </b>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.ticketPrice}>
                {flight.base_price}
            </div>
        </div>
    </div>);
}
