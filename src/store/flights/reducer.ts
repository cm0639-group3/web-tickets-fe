import {FlightsActions, REQUEST_GET_FLIGHTS, SET_FLIGHTS} from "./actions";
import {FlightsState} from "./types";

const initialFlightsState: FlightsState = Object.freeze({
    flights: [],
})

export const flightsReducer = (state = initialFlightsState, action: initialFlightsState) => {
    switch (action.type) {
        case REQUEST_GET_FLIGHTS:
            return state;
        case SET_FLIGHTS:
            return {
                ...state,
                flights: action.payload.flights,
            }
        default:
            return state;
    }
}

