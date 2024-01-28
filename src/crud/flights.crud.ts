import createdAxios from "../axios/setup";
import {Airport, Flight, Luggage} from "../models/flights";

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



export const getFlightById = (id: number): Promise<Flight> =>
    createdAxios.get(`/api/flight/${id}`);


export const addFlight = (data: Flight): Promise<Flight> => createdAxios.post("/api/flight/", data);

export const addFlightToCart = (id: number, flight: Flight): Promise<Flight> => createdAxios.post(`/api/flight/${id}/add_to_cart/`,
    flight);

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

export interface GetLuggageResponse {
    count: number;
    next: number | null;
    previous: number | null;
    results: Luggage[];
}

interface GetListOfLuggageData {
    name?: string;
    size?: string;
    unit?: string;
    ordering?: string;
    limit: number;
    offset: number;
}

export const getListOfLuggage = (data: GetListOfLuggageData): Promise<GetLuggageResponse> => createdAxios.get("/api/luggage")
