import createdAxios from "../axios/setup";
import {Airport, Flight} from "../models/flights";

export interface GetFlightsData {
    name?: string;
    departure_time?: string;
    arrival_time?: string;
    remaining_seats?: number;
    seats?: number;
    distance?: number;
    airplane?: number;
    source_airport?: number;
    destination_airport?: number;
}

export interface GetFlightsResponse {
    count: number;
    next: number | null;
    previous: number | null;
    results: Flight[];
}

export const getFlights = (data: GetFlightsData): Promise<GetFlightsResponse> =>
    createdAxios.get("/api/flight/", {params: data});


export const addFlight = (data: Flight): Promise<Flight> => createdAxios.post("/api/flight/", data);

export interface GetAirportResponse {
    count: number;
    next: number | null;
    previous: number | null;
    results: Airport[];
}

export interface GetAirportsData {
    name?: string;
    code?: string;
    city?: string;
    ordering?: string;
    limit?: string;
    offset?: string;
    isSourceAirport: boolean;
}

export const getAirports = (data: GetAirportsData): Promise<GetAirportResponse> => createdAxios.get("/api/airport", {
    params: data});
