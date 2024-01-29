import {REQUEST_BUY_CART_TICKET, REQUEST_GET_CART, RequestGetCart, setCart} from "./actions";
import type { AllEffect, CallEffect, ForkEffect, PutEffect, SelectEffect } from "redux-saga/effects";
import {getCart as getCartRequest, buyCartTicket as buyCartTicketRequest, buyCartTicket} from "../../crud/cart.crud";
import { SetCartPayload } from "./actions";

import { all, call, delay, put, select, takeLatest } from "redux-saga/effects";
import {Ticket} from "../../models/tickets";
import {setErrorNotification} from "../../modules/notification/state";

export function* getCartSaga({ payload }: RequestGetCart): Generator<CallEffect<SetCartPayload> | PutEffect, void, SetCartPayload> {
    try {
        const response = yield call(getCartRequest, payload);

        yield put(
            setCart(response.data)
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

export function* buyCartTicketSaga({ payload }: Ticket): Generator<CallEffect<Ticket>> {
    try {
        yield call(buyCartTicketRequest, payload);
    } catch (error) {
        yield put(
            setErrorNotification({
                title: error.status,
                message: error.message,
            })
        )
    }
}

export function* watchCart(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(REQUEST_GET_CART, getCartSaga);
    yield takeLatest(REQUEST_BUY_CART_TICKET, buyCartTicketSaga);
}
