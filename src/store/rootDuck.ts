import { combineReducers } from "redux";
import type { ActionChannelEffect, AllEffect, CallEffect, ForkEffect, TakeEffect } from "redux-saga/effects";
import { all } from "redux-saga/effects";



export interface AppRootState {}

export const rootReducer = combineReducers({});

export function* rootSaga(): Generator<
    AllEffect<Generator<TakeEffect | ForkEffect<never> | CallEffect | ActionChannelEffect, void>>,
    void
    > {
    yield all([]);
}
