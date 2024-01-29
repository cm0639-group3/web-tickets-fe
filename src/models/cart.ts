import {Ticket} from "./tickets";

export interface Cart {
    count: number;
    next?: string;
    previous?: string;
    results: Ticket[];
}
