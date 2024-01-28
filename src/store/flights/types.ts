import {Airport, Flight, Luggage} from "../../models/flights";

export interface FlightsState {
    flights: Flight[];
    currentFlight?: Flight;
    airports?: Airport[];
    currentFlightId?: number;
    isSourceAirport?: boolean;
    listOfLuggage?: Luggage[];
    luggage?: Luggage;
}
