import type { DefaultRootState } from "react-redux";
import {Airport, Flight, Luggage} from "../../models/flights";

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
});

interface SelectCurrentFlight {
    currentFlight?: Flight;
}

export const selectCurrentFlight = (state: DefaultRootState): SelectCurrentFlight => ({
        currentFlight: state.flights.currentFlight,
});

interface SelectListOfLuggage {
    listOfLuggage?: Luggage[];
}

export const selectListOfLuggage = (state: DefaultRootState): SelectListOfLuggage => ({
    listOfLuggage: state.flights.listOfLuggage,
})

interface SelectLuggage {
    luggage?: Luggage;
}

export const selectLuggage = (state: DefaultRootState): SelectLuggage => ({
    luggage: state.flights.luggage,
})
