import {CommonAction, createAction} from "../common";
import {Flight} from "../../models/flights";

// Saga actions
export const REQUEST_GET_FLIGHTS = "flights/REQUEST_GET_FLIGHTS";

interface RequestGetFlightsPayload  {
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

export type RequestGetFlights = CommonAction<typeof REQUEST_GET_FLIGHTS, RequestGetFlightsPayload>;
export const requestGetFlights = (payload: RequestGetFlightsPayload): RequestGetFlights =>
    createAction(REQUEST_GET_FLIGHTS, payload);

// Redux actions
export const SET_FLIGHTS = "flights/SET_FLIGHTS";

interface SetFlightsPayload {
    flights: Flight[];
}

type SetFlights = CommonAction<typeof SET_FLIGHTS, SetFlightsPayload>;
export const setFlights = (payload: SetFlightsPayload): SetFlights => createAction(SET_FLIGHTS, payload);

export type FlightsActions = RequestGetFlights | SetFlights
