import { Ticket } from "../../models/tickets"
import {CommonAction, createAction} from "../common";

// Saga actions
export const REQUEST_GET_TICKETS = "tickets/REQUEST_GET_TICKETS";

interface RequestGetTicketsPayload {
    limit: number;
    offset: number;
}

export type RequestGetTickets = CommonAction<typeof REQUEST_GET_TICKETS, RequestGetTicketsPayload>;
export const requestGetTickets = (payload: RequestGetTicketsPayload): RequestGetTickets => createAction(REQUEST_GET_TICKETS, payload)

export const SET_TICKETS = "tickets/SET_TICKETS";

interface SetTicketsPayload {
    count: number;
    previous?: string;
    next?: string;
    results: Ticket[];
}

type SetTickets = CommonAction<typeof SET_TICKETS, SetTicketsPayload>;
export const setTickets = (payload: SetTicketsPayload): SetTickets => createAction(SET_TICKETS, payload)

export type TicketsActions = RequestGetTickets | SetTickets;
