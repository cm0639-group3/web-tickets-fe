import {REQUEST_GET_TICKETS, SET_TICKETS, TicketsActions} from "./actions";
import {TicketsState} from "./types";

const initialTicketsState: TicketsState = Object.freeze({
    tickets: [],
    next: null,
    previous: null,
});

export const ticketsReducer = (state = initialTicketsState, action: TicketsActions) => {
    switch (action.type) {
        case REQUEST_GET_TICKETS:
            return state;
        case SET_TICKETS:
            return {
                ...state,
                tickets: action.payload.results,
                previous: action.payload?.previous,
                next: action.payload?.next,
            }
        default:
            return state;
    }
}
