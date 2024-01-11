import {ContentHeader} from "../../components/ContentHeader/ContentHeader";
import {SearchTicketsForm} from "./SearchTicketsForm";
import {TicketsList} from "./TicketsList";

//FIXME: Change this hardcoded array with REDUX
const tickets = [
    {
        price: "130 eur",
        transfers: [
            {
                departmentTimeAndDate: "12:30 Tue 01.02.2023",
                arrivalTimeAndDate: "18:30 Tue 01.02.2023",
                departmentCity: "Venice",
                arrivalCity: "Milan",
            },
            {
                departmentTimeAndDate: "12:30 Tue 01.02.2023",
                arrivalTimeAndDate: "19:30 Tue 01.02.2023",
                departmentCity: "Milan",
                arrivalCity: "Madrid",
            },
            {
                departmentTimeAndDate: "20:30 Tue 01.02.2023",
                arrivalTimeAndDate: "23:30 Tue 01.02.2023",
                departmentCity: "Milan",
                arrivalCity: "New York",
            },
        ],
        numberOfTransfers: 2,
    }, {
        price: "120 eur",
        numberOfTransfers: 0,
        transfers: [
            {
                departmentTimeAndDate: "20:30 Tue 01.02.2023",
                arrivalTimeAndDate: "23:30 Tue 01.02.2023",
                departmentCity: "Milan",
                arrivalCity: "New York",
            },
        ]
    }, {
        price: "300 eur",
        numberOfTransfers: 1,
        transfers: [
            {
                departmentTimeAndDate: "12:30 Tue 01.02.2023",
                arrivalTimeAndDate: "18:30 Tue 01.02.2023",
                departmentCity: "Venice",
                arrivalCity: "Milan",
            },
            {
                departmentTimeAndDate: "12:30 Tue 01.02.2023",
                arrivalTimeAndDate: "19:30 Tue 01.02.2023",
                departmentCity: "Milan",
                arrivalCity: "Madrid",
            },
        ],
    },]
export type Tickets = typeof tickets;

export const SearchTicketsPage = () => {
    return (
        <div>
            <ContentHeader label="Search for tickets"
               content="Select destination and dates"
            />
            <SearchTicketsForm />
            <TicketsList tickets={tickets} />
        </div>
    )
}
