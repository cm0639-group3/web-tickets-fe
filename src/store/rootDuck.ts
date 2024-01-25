import { combineReducers } from "redux";
import type { ActionChannelEffect, AllEffect, CallEffect, ForkEffect, TakeEffect } from "redux-saga/effects";
import { all } from "redux-saga/effects";
import {flightsReducer} from "./flights/reducer";
import {watchFlights} from "./flights/saga";
import {FlightsState} from "./flights/types";
import {watchTickets} from "./tickets/saga";
import {TicketsState} from "./tickets/types";
import {ticketsReducer} from "./tickets/reducer";


export interface AppRootState {
    flights: FlightsState;
    tickets: TicketsState;
}

export const rootReducer = combineReducers({
    flights: flightsReducer,
    tickets: ticketsReducer,
});

export function* rootSaga(): Generator<
    AllEffect<Generator<TakeEffect | ForkEffect<never> | CallEffect | ActionChannelEffect, void>>,
    void
    > {
    yield all([watchFlights(), watchTickets()]);
}
