import {Flight} from "../../models/flights";

export interface FlightsState {
    flights: Flight[];
    currentFlightId?: number;
}
