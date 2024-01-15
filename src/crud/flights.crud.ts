import createdAxios from "../axios/setup";
import {Flight} from "../models/flights";

export interface GetFlightsResponse {
    count: number;
    next: number | null;
    previous: number | null;
    results: Flight[];
}

export const getFlights = (): GetFlightsResponse =>
    createdAxios.get("/api/flight/");


export const addFlight = (data: Flight): Promise<Flight> => createdAxios.post("/api/flight/", data);
