import {Flight} from "../models/flights";

function compareFlights(a: Flight, b: Flight, sortBy: string, isAsc: boolean): number {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (typeof valueA === 'number' && typeof valueB === 'number') {
        return isAsc ? valueA - valueB : valueB - valueA;
    } else if (typeof valueA === 'string' && typeof valueB === 'string') {
        return isAsc ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    } else {
        return 0;
    }
}

export function sortFlights(flights: Flight[], sortBy: string, isAsc: boolean): Flight[] {
    return flights.sort((a, b) => compareFlights(a, b, sortBy, isAsc));
}
