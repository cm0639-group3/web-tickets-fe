export interface Flight {
    id: number;
    name: string;
    departure_time: string;
    arrival_time: string;
    remaining_seats?: number;
    seats?: number;
    distance: number;
    airplane: number;
    source_airport: number;
    destination_airport: number;
    base_price: string;
}

export interface Airport {
    id: number;
    name: string;
    code: string;
    city: string;
    ordering: string;
    limit: string;
    offset: string;
}

export interface Luggage {
    id: number;
    name: string;
    size: string;
    unit: string;
}
