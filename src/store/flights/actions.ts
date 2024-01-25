import {CommonAction, createAction} from "../common";
import {Airport, Flight} from "../../models/flights";
import {GetAirportsData} from "../../crud/flights.crud";

// Saga actions
export const REQUEST_GET_FLIGHTS = "flights/REQUEST_GET_FLIGHTS";
export const REQUEST_GET_AIRPORTS = "flights/REQUEST_GET_AIRPORTS";

interface RequestGetFlightsPayload  {
    name?: string;
    departure_time?: Date;
    arrival_time?: Date;
    remaining_seats?: number;
    seats?: number;
    distance?: number;
    airplane?: number;
    source_airport?: number;
    destination_airport?: number;
}

export type RequestGetFlights = CommonAction<typeof REQUEST_GET_FLIGHTS, RequestGetFlightsPayload>;
export const requestGetFlights = (payload: RequestGetFlightsPayload): RequestGetFlights =>
    createAction(REQUEST_GET_FLIGHTS, payload);

export type RequestGetAirports = CommonAction<typeof REQUEST_GET_AIRPORTS, GetAirportsData>
export const requestGetAirports = (payload: GetAirportsData): RequestGetAirports =>
    createAction(REQUEST_GET_AIRPORTS, payload);




// Redux actions
export const SET_FLIGHTS = "flights/SET_FLIGHTS";
export const SET_AIRPORTS = "flights/SET_AIRPORTS";

interface SetFlightsPayload {
    flights: Flight[];
}

type SetFlights = CommonAction<typeof SET_FLIGHTS, SetFlightsPayload>;
export const setFlights = (payload: SetFlightsPayload): SetFlights => createAction(SET_FLIGHTS, payload);

interface SetAirportsPayload {
    airports?: Airport[];
    isSourceAirport?: boolean;
}

type SetAirports = CommonAction<typeof SET_AIRPORTS, SetAirportsPayload>;
export const setAirports = (payload: SetAirportsPayload): SetAirports => createAction(SET_AIRPORTS, payload);

export type FlightsActions = RequestGetFlights | SetFlights | RequestGetAirports | SetAirports;
