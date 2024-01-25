import {FlightsActions, REQUEST_GET_FLIGHTS, SET_FLIGHTS, SET_AIRPORTS} from "./actions";
import {FlightsState} from "./types";

const initialFlightsState: FlightsState = Object.freeze({
    flights: [],
})

export const flightsReducer = (state = initialFlightsState, action: FlightsActions) => {
    switch (action.type) {
        case REQUEST_GET_FLIGHTS:
            return state;
        case SET_FLIGHTS:
            return {
                ...state,
                flights: action.payload.flights,
            }
        case SET_AIRPORTS:
            return {
                ...state,
                airports: action.payload.airports,
                isSourceAirport: action.payload.isSourceAirport,
            }
        default:
            return state;
    }
}

