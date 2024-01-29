import { combineReducers } from "redux";
import type { ActionChannelEffect, AllEffect, CallEffect, ForkEffect, TakeEffect } from "redux-saga/effects";
import { all } from "redux-saga/effects";
import {flightsReducer} from "./flights/reducer";
import {watchFlights} from "./flights/saga";
import {FlightsState} from "./flights/types";
import {watchTickets} from "./tickets/saga";
import {TicketsState} from "./tickets/types";
import {ticketsReducer} from "./tickets/reducer";
import {cartReducer} from "./cart/reducer";
import {watchCart} from "./cart/saga";
import {CartState} from "./cart/types";
import {notificationReducer, NotificationState } from "../modules/notification/state";

export interface AppRootState {
    flights: FlightsState;
    tickets: TicketsState;
    cart: CartState;
    notification: NotificationState;
}

export const rootReducer = combineReducers({
    flights: flightsReducer,
    tickets: ticketsReducer,
    cart: cartReducer,
    notification: notificationReducer,
});

export function* rootSaga(): Generator<
    AllEffect<Generator<TakeEffect | ForkEffect<never> | CallEffect | ActionChannelEffect, void>>,
    void
    > {
    yield all([watchFlights(), watchTickets(), watchCart()]);
}
