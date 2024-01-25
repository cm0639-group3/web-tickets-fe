import {Ticket} from "../models/tickets";
import createdAxios from "../axios/setup";

export interface GetTicketsData {
    limit: number;
    offset: string;
}

export interface GetTicketsResponse {
    count: number;
    next:  number | null;
    previous: number | null;
    results: Ticket[];
}

export const getTickets = (data: GetTicketsData): Promise<GetTicketsResponse> => createdAxios.get("/api/ticket", { params: data});
