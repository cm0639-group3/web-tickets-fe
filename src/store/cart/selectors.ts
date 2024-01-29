import {Ticket} from "../../models/tickets";
import {DefaultRootState} from "react-redux";

interface SelectTickets {
    tickets: Ticket[];
    next: string | null;
    previous: string | null;
}

export const selectTickets = (state: DefaultRootState): SelectTickets => ({
    tickets: state.tickets.tickets,
    next: state.tickets.next,
    previous: state.tickets.previous,
})
