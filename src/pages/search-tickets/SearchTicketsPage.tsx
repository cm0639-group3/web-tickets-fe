import {ContentHeader} from "../../components/ContentHeader/ContentHeader";
import {SearchTicketsForm} from "./SearchTicketsForm";
import {TicketsList} from "./TicketsList";

export const SearchTicketsPage = () => {

    return (
        <div>
            <ContentHeader label="Search for tickets"
               content="Select destination and dates"
            />
            <SearchTicketsForm />
            <TicketsList />
        </div>
    )
}
