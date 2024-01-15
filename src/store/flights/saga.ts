import {getFlights as getFlightsRequest, GetFlightsResponse} from "../../crud/flights.crud";
import {REQUEST_GET_FLIGHTS, SET_FLIGHTS, setFlights, requestGetFlights, FlightsActions, RequestGetFlights} from "./actions";
import type { AllEffect, CallEffect, ForkEffect, PutEffect, SelectEffect } from "redux-saga/effects";
import { all, call, delay, put, select, takeLatest } from "redux-saga/effects";

export function* getFlightsSaga({ payload }: RequestGetFlights): Generator<CallEffect<GetFlightsResponse> | PutEffect, void, GetFlightsResponse> {
    try {
        const response = yield call(getFlightsRequest, payload);
        console.log("response = ", response);

        yield put(
            setFlights({
                flights: response.data.results,
            }),
        );
    } catch (error) {
        //TODO: Add error handling
    }
}


export function* watchFlights(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(REQUEST_GET_FLIGHTS, getFlightsSaga);
}
