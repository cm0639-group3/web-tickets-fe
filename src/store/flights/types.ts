import {Airport, Flight} from "../../models/flights";

export interface FlightsState {
    flights: Flight[];
    airports?: Airport[];
    currentFlightId?: number;
    isSourceAirport?: boolean;
}
