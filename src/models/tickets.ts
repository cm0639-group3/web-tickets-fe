import {Flight} from "./flights";

export interface Ticket {
    id: number;
    user?: number;
    flight: Flight;
    current_price: string;
    is_purchased: boolean;
    is_available: boolean;
}
