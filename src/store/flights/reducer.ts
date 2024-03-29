import {
    FlightsActions,
    REQUEST_GET_FLIGHT_BY_ID,
    REQUEST_GET_FLIGHTS,
    REQUEST_GET_LIST_OF_LUGGAGE,
    SET_AIRPORTS,
    SET_CURRENT_FLIGHT,
    SET_FLIGHTS,
    SET_LIST_OF_LUGGAGE, SET_LUGGAGE, SORT_FLIGHTS_LIST
} from "./actions";
import {FlightsState} from "./types";
import {sortFlights} from "../../helpers/sortFlights";

const initialFlightsState: FlightsState = Object.freeze({
    flights: [],
})

export const flightsReducer = (state = initialFlightsState, action: FlightsActions): FlightsState => {
    switch (action.type) {
        case REQUEST_GET_FLIGHTS:
        case REQUEST_GET_FLIGHT_BY_ID:
        case REQUEST_GET_LIST_OF_LUGGAGE:
            return state;
        case SET_FLIGHTS:
            return {
                ...state,
                flights: action.payload.flights,
            }
        case SET_CURRENT_FLIGHT:
            return {
                ...state,
                currentFlight: action.payload,
            }
        case SET_AIRPORTS:
            return {
                ...state,
                airports: action.payload.airports,
                isSourceAirport: action.payload.isSourceAirport,
            }
        case SORT_FLIGHTS_LIST:
            const { sortBy, isAsc } = action.payload;
            return {
                ...state,
                flights: sortFlights(state.flights, sortBy, isAsc),
            }
        case SET_LIST_OF_LUGGAGE:
            return {
                ...state,
                listOfLuggage: action.payload.listOfLuggage,
            }
        case SET_LUGGAGE:
            return {
                ...state,
                luggage: action.payload,
            }
        default:
            return state;
    }
}

