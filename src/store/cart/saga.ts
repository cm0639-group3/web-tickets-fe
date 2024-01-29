import {REQUEST_GET_CART, RequestGetCart, setCart} from "./actions";
import type { AllEffect, CallEffect, ForkEffect, PutEffect, SelectEffect } from "redux-saga/effects";
import {getCart as getCartRequest } from "../../crud/cart.crud";
import { SetCartPayload } from "./actions";

import { all, call, delay, put, select, takeLatest } from "redux-saga/effects";

export function* getCartSaga({ payload }: RequestGetCart): Generator<CallEffect<SetCartPayload> | PutEffect, void, SetCartPayload> {
    try {
        const response = yield call(getCartRequest({}), payload);
        yield put(
            setCart(response.data)
        )
    } catch (error) {
        //TODO: Add error handling
    }
}

export function* watchCart(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(REQUEST_GET_CART, getCartSaga);
}
