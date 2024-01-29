import createdAxios from "../axios/setup";
import {SetCartPayload} from "../store/cart/actions";
import {Ticket} from "../models/tickets";

interface GetCartData {
    limit?: number;
    offset?: number;
}

export const getCart = (data: GetCartData): Promise<SetCartPayload> => createdAxios.get("/api/cart", {
    limit: 1,
    offset: 1,
});

export const buyCartTicket = (data: Ticket) => createdAxios.post("/api/cart/buy_tickets/", data);
