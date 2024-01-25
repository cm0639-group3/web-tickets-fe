import {GetAirportResponse,
    getFlights as getFlightsRequest,
    GetFlightsResponse,
    getAirports as getAirportsRequest
} from "../../crud/flights.crud";
import {
    REQUEST_GET_FLIGHTS,
    SET_FLIGHTS,
    setFlights,
    requestGetFlights,
    FlightsActions,
    RequestGetFlights,
    RequestGetAirports, setAirports, REQUEST_GET_AIRPORTS
} from "./actions";
import type { AllEffect, CallEffect, ForkEffect, PutEffect, SelectEffect } from "redux-saga/effects";
import { all, call, delay, put, select, takeLatest } from "redux-saga/effects";

export function* getFlightsSaga({ payload }: RequestGetFlights): Generator<CallEffect<GetFlightsResponse> | PutEffect, void, GetFlightsResponse> {
    try {
        const response = yield call(getFlightsRequest, payload);

        yield put(
            setFlights({
                flights: response.data.results,
            }),
        );
    } catch (error) {
        //TODO: Add error handling
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
        //TODO: Add error handling
    }
}


export function* watchFlights(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(REQUEST_GET_FLIGHTS, getFlightsSaga);
    yield takeLatest(REQUEST_GET_AIRPORTS, getAirportsSaga);
}
