import {CommonAction, createAction} from "../common";
import {Airport, Flight, Luggage} from "../../models/flights";
import {GetAirportsData} from "../../crud/flights.crud";

// Saga actions
export const REQUEST_GET_FLIGHTS = "flights/REQUEST_GET_FLIGHTS";
export const REQUEST_GET_AIRPORTS = "flights/REQUEST_GET_AIRPORTS";
export const REQUEST_GET_FLIGHT_BY_ID = "flight/REQUEST_GET_FLIGHT_BY_ID";
export const REQUEST_GET_LIST_OF_LUGGAGE = "flight/REQUEST_GET_LIST_OF_LUGGAGE";


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

export interface RequestGetFlightByIdPayload {
    flightId: number;
}

export type RequestGetFlightById = CommonAction<typeof REQUEST_GET_FLIGHT_BY_ID, RequestGetFlightByIdPayload>;
export const requestGetFlightById = (payload: RequestGetFlightByIdPayload): RequestGetFlightById => createAction(REQUEST_GET_FLIGHT_BY_ID, payload)

export type RequestGetAirports = CommonAction<typeof REQUEST_GET_AIRPORTS, GetAirportsData>
export const requestGetAirports = (payload: GetAirportsData): RequestGetAirports =>
    createAction(REQUEST_GET_AIRPORTS, payload);

interface RequestGetListOfLuggagePayload  {
    name?: string;
    size?: string;
    unit?: string;
    ordering?: string;
    limit?: number;
    offset?: number;
}

export type RequestGetListOfLuggage = CommonAction<typeof REQUEST_GET_LIST_OF_LUGGAGE, RequestGetListOfLuggagePayload>;
export const requestGetListOfLuggage = (payload: RequestGetListOfLuggagePayload): RequestGetListOfLuggage => createAction(REQUEST_GET_LIST_OF_LUGGAGE, payload)

// Redux actions
export const SET_FLIGHTS = "flights/SET_FLIGHTS";
export const SET_CURRENT_FLIGHT = "flights/SET_CURRENT_FLIGHT";
export const SET_AIRPORTS = "flights/SET_AIRPORTS";
export const SET_LIST_OF_LUGGAGE = "flights/SET_LIST_OF_LUGGAGE";
export const SET_LUGGAGE = "flights/SET_LUGGAGE";
export const SORT_FLIGHTS_LIST = "flights/SORT_FLIGHTS_LIST"

interface SetFlightsPayload {
    flights: Flight[];
}

type SetFlights = CommonAction<typeof SET_FLIGHTS, SetFlightsPayload>;
export const setFlights = (payload: SetFlightsPayload): SetFlights => createAction(SET_FLIGHTS, payload);

interface SetAirportsPayload {
    airports?: Airport[];
    isSourceAirport?: boolean;
}

type SetCurrentFlight = CommonAction<typeof SET_CURRENT_FLIGHT, Flight>;
export const setCurrentFlight = (payload: Flight) => createAction(SET_CURRENT_FLIGHT, payload);

type SetAirports = CommonAction<typeof SET_AIRPORTS, SetAirportsPayload>;
export const setAirports = (payload: SetAirportsPayload): SetAirports => createAction(SET_AIRPORTS, payload);

interface SetListOfLuggagePayload {
    listOfLuggage: Luggage[];
}

type SetListOfLuggage = CommonAction<typeof SET_LIST_OF_LUGGAGE, SetListOfLuggagePayload>;
export const setListOfLuggage = (payload: { listOfLuggage: Luggage[] }) => createAction(SET_LIST_OF_LUGGAGE, payload)

type SetLuggage = CommonAction<typeof SET_LUGGAGE, Luggage>;
export const setLuggage = (payload: Luggage) => createAction(SET_LUGGAGE, payload)

interface SortFlightsListPayload {
    sortBy: "base_price" | "departure_time",
    isAsc: boolean;
}

type SortFlightsList = CommonAction<typeof SORT_FLIGHTS_LIST, SortFlightsListPayload>;
export const sortFlightsList = (payload: SortFlightsListPayload) => createAction(SORT_FLIGHTS_LIST, payload);

export type FlightsActions = RequestGetFlights | RequestGetFlightById | SetFlights
    | SetCurrentFlight | RequestGetAirports | SetAirports |  SortFlightsList
    | SetLuggage | RequestGetListOfLuggagePayload;
