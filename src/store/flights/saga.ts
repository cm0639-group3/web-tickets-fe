import {
    GetAirportResponse,
    getFlights as getFlightsRequest,
    GetFlightsResponse,
    getAirports as getAirportsRequest,
    getFlightById as getFlightByIdRequest, GetLuggageResponse,
    getListOfLuggage as getListOfLuggageRequest,
} from "../../crud/flights.crud";
import {
    REQUEST_GET_FLIGHTS,
    SET_FLIGHTS,
    setFlights,
    requestGetFlights,
    FlightsActions,
    RequestGetFlights,
    RequestGetAirports,
    setAirports,
    REQUEST_GET_AIRPORTS,
    RequestGetFlightByIdPayload,
    setCurrentFlight,
    REQUEST_GET_FLIGHT_BY_ID,
    requestGetListOfLuggage,
    REQUEST_GET_LIST_OF_LUGGAGE,
    RequestGetListOfLuggagePayload, setListOfLuggage
} from "./actions";
import type { AllEffect, CallEffect, ForkEffect, PutEffect, SelectEffect } from "redux-saga/effects";
import { all, call, delay, put, select, takeLatest } from "redux-saga/effects";
import {Flight, Luggage} from "../../models/flights";
import {setErrorNotification} from "../../modules/notification/state";

export function* getFlightsSaga({ payload }: RequestGetFlights): Generator<CallEffect<GetFlightsResponse> | PutEffect, void, GetFlightsResponse> {
    try {
        const response = yield call(getFlightsRequest, payload);

        yield put(
            setFlights({
                flights: response.data.results,
            }),
        );
    } catch (error) {
        yield put(
            setErrorNotification({
                title: error.status,
                message: error.message,
            })
        )
    }
}

export function* getAirportsSaga({ payload }: RequestGetAirports): Generator<CallEffect<GetAirportResponse> | PutEffect, void, GetAirportResponse> {
    try {
        const response = yield call(getAirportsRequest, payload);

        yield put(
            setAirports({
                airports: response.data.results,
                isSourceAirport: payload.isSourceAirport,
            })
        )
    } catch (error) {
        yield put(
            setErrorNotification({
                title: error.status,
                message: error.message,
            })
        )
    }
}

export function* getFlightById({ payload }: RequestGetFlightByIdPayload): Generator<CallEffect<Flight> | PutEffect, void, Flight> {
    try {
        const response = yield call(getFlightByIdRequest, payload);

        yield put(
            setCurrentFlight(response.data)
        )
    } catch (error) {
        yield put(
            setErrorNotification({
                title: error.status,
                message: error.message,
            })
        )
    }
}

export function* getListOfLuggage({ payload }: RequestGetListOfLuggagePayload): Generator<CallEffect<GetLuggageResponse> | PutEffect, void, GetLuggageResponse> {
    try {
        const response = yield call(getListOfLuggageRequest, payload) as Array<Luggage>;
        const results = response.data.results as Luggage[];

        yield put(
            setListOfLuggage({
                listOfLuggage: results,
            })
        )
    } catch (e) {
        yield put(
            setErrorNotification({
                title: e.status,
                message: e.message,
            })
        )
    }
}


export function* watchFlights(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(REQUEST_GET_FLIGHTS, getFlightsSaga);
    yield takeLatest(REQUEST_GET_AIRPORTS, getAirportsSaga);
    yield takeLatest(REQUEST_GET_FLIGHT_BY_ID, getFlightById);
    yield takeLatest(REQUEST_GET_LIST_OF_LUGGAGE, getListOfLuggage);
}
