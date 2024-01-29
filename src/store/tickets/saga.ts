import {REQUEST_GET_TICKETS, RequestGetTickets, setTickets} from "./actions";
import type { AllEffect, CallEffect, ForkEffect, PutEffect, SelectEffect } from "redux-saga/effects";
import {getTickets as getTicketsRequest, GetTicketsResponse} from "../../crud/tickets.crud";
import { all, call, delay, put, select, takeLatest } from "redux-saga/effects";
import {setErrorNotification} from "../../modules/notification/state";

export function* getTicketsSaga({ payload }: RequestGetTickets): Generator<CallEffect<GetTicketsResponse> | PutEffect, void, GetTicketsResponse> {
    try {
        const response = yield call(getTicketsRequest, payload);
        yield put(
            setTickets(response.data)
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

export function* watchTickets(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(REQUEST_GET_TICKETS, getTicketsSaga);
}
