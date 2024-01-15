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
}
