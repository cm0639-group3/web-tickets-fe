import {Ticket} from "../../models/tickets";

export interface TicketsState {
    tickets: Ticket[];
    next: string | null;
    previous: string | null;
    currentTicketId?: number;
}
