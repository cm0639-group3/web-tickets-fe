import {Flight, Airport, Luggage} from "../../../models/flights";

export const createMockedFlight = (): Flight => ({
    id: 1,
    name: "ticket_name",
    departure_time: "12:23:2024, Th",
    arrival_time: "02:23:2024, Fr",
    remaining_seats: 51,
    seats: 4,
    distance: 3,
    airplane: 2,
    source_airport: 10,
    destination_airport: 11,
    base_price: "400",
});
