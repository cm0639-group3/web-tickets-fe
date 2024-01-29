import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import type { AppRootState } from "./rootDuck";
import { rootReducer, rootSaga } from "./rootDuck";
import {initAxiosInterceptors} from "../axios/setup";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

initAxiosInterceptors(store);

declare module "react-redux" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultRootState extends AppRootState {}
}
