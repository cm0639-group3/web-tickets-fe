import {ContentHeader} from "../../components/ContentHeader/ContentHeader";
import {SearchTicketsForm} from "./SearchTicketsForm";
import {TicketsList} from "./TicketsList";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestGetTickets} from "../../store/tickets/actions";
import {selectTickets} from "../../store/tickets/selectors";
import {addFlight} from "../../crud/flights.crud";
import createdAxios from "../../axios/setup";


const TICKETS_NUMBER_PER_PAGE = 20;

export const SearchTicketsPage = () => {
    const dispatch = useDispatch();
    const { tickets, next, previous } = useSelector(selectTickets);
    const [page, setPage] = useState(0);

    // useEffect(() => {
    //     dispatch(requestGetTickets({
    //         limit: TICKETS_NUMBER_PER_PAGE,
    //         offset: page,
    //     }));

        // createdAxios.post("/api/airline/", {
        //     name: "name",
        //     country: {
        //         name: "Country name",
        //     },
        // });

        // addFlight({
        //     name: "name",
        //     departure_time: "departure_time",
        //     arrival_time: "arrival_time",
        //     remaining_seats: 3,
        //     seats: 3,
        //     distance: 3,
        //     airplane: 3,
        //     source_airport: 3,
        //     destination_airport: 3,
        // });
    // }, []);

    // useEffect(() => {
    //     dispatch(requestGetTickets({
    //         limit: TICKETS_NUMBER_PER_PAGE,
    //         offset: page
    //     }))
    // }, [page]);

    return (
        <div>
            <ContentHeader label="Search for tickets"
               content="Select destination and dates"
            />
            <SearchTicketsForm />
            <TicketsList
                // tickets={tickets}
                // next={!!next}
                // previous={!!previous}
                // page={page}
                // setPage={setPage}
            />
        </div>
    )
}
