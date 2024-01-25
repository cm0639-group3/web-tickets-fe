import type { DefaultRootState } from "react-redux";
import {Airport, Flight} from "../../models/flights";

interface SelectFlights {
    flights: Flight[];
}

export const selectFlights = (state: DefaultRootState): SelectFlights => ({
    flights: state.flights.flights,
});

interface SelectAirports {
    airports?: Airport[];
    isSourceAirport?: boolean;
}

export const selectAirports = (state: DefaultRootState): SelectAirports => ({
    airports: state.flights.airports,
    isSourceAirport: state.flights.isSourceAirport,
})
