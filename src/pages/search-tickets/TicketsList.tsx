import css from "./TicketsList.module.scss";
import { v4 as uuid } from "uuid";
import {Button} from "../../components/Button/Button";
import {FC, useEffect} from "react";
import {Ticket} from "../../models/tickets";
import {useDispatch, useSelector} from "react-redux";
import {selectFlights} from "../../store/flights/selectors";

interface TicketsListProps {
    // tickets: Ticket[],
    // next: boolean;
    // previous: boolean;
    // page: number;
    // setPage: (value: (((prevState: number) => number) | number)) => void
}

export const TicketsList: FC<TicketsListProps> = ({
      // tickets,
      // next,
      // previous,
      // page,
      // setPage
}) => {
    const { flights } = useSelector(selectFlights);

    const dispatch = useDispatch();

    // const handlePrevBtnClick = (event) => {
    //     event.preventDefault();
    //     setPage(page-1);
    // }
    // const handleNextBtnClick = (event) => {
    //     event.preventDefault();
    //     setPage(page+1);
    // }

    return (<div className={css.ticketsList}>
        <div>
            {flights.map((flight) => {
            const departureTime = new Date(flight.departure_time);
            const departureHour = departureTime.getUTCHours();
            const departureMinute = departureTime.getUTCMinutes();

            const arrivalTime = new Date(flight.arrival_time);
            const arrivalHour = departureTime.getUTCHours();
            const arrivalMinute = departureTime.getUTCMinutes();

            return <div  key={uuid()} className={css.ticket}>
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
                    <Button className={css.ticketBuyButton} btnType="primary">Buy</Button>
                </div>
            </div> }
        )}
        </div>
        {/*<div className={css.pagination}>*/}
        {/*    {*/}
        {/*        // previous &&*/}
        {/*        <Button onClick={handlePrevBtnClick} className={css.paginationBtn} btnType="primary">Prev</Button>}*/}
        {/*    {*/}
        {/*        // next &&*/}
        {/*        <Button onClick={handleNextBtnClick} className={css.paginationBtn} btnType="primary">Next</Button>}*/}
        {/*</div>*/}
    </div>);
}
