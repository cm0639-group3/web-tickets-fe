import {CommonAction, createAction} from "../common";
import {Cart} from "../../models/cart";
import {Ticket} from "../../models/tickets";

// Saga actions
export const REQUEST_GET_CART = "cart/REQUEST_GET_CART";
export const REQUEST_BUY_CART_TICKET = "cart/REQUEST_BUY_CART_TICKET";

interface RequestGetCartPayload {
    limit?: number;
    offset?: number;
}

export type RequestGetCart = CommonAction<typeof REQUEST_GET_CART, RequestGetCartPayload>;
export const requestGetCart = (payload: RequestGetCartPayload): RequestGetCart => createAction(REQUEST_GET_CART, payload);

export type RequestBuyCartTicket = CommonAction<typeof REQUEST_BUY_CART_TICKET, Ticket>;
export const requestBuyCartTicket = (payload: Ticket) => createAction(REQUEST_BUY_CART_TICKET, payload)

export const SET_CART = "cart/SET_CART";

export interface SetCartPayload {
    count: number;
    previous?: string;
    next?: string;
    results: Ticket[];
}

type SetCart = CommonAction<typeof SET_CART, SetCartPayload>;
export const setCart = (payload: SetCartPayload): SetCart => createAction(SET_CART, payload)

export type CartActions = RequestGetCart | RequestBuyCartTicket | SetCart;
