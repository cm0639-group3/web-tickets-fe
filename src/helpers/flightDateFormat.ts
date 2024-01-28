import {Flight} from "../models/flights";

interface FlightDateFormat {
    departureTime: Date;
    departureHour: number;
    departureMinute: number;
    arrivalTime: Date;
    arrivalHour: number;
    arrivalMinute: number
}

export const flightDateFormat = (flight: Flight): FlightDateFormat => {
    const departureTime = new Date(flight.departure_time);
    const departureHour = departureTime.getUTCHours();
    const departureMinute = departureTime.getUTCMinutes();

    const arrivalTime = new Date(flight.arrival_time);
    const arrivalHour = arrivalTime.getUTCHours();
    const arrivalMinute = arrivalTime.getUTCMinutes();

    return {
        departureTime,
        departureHour,
        departureMinute,
        arrivalTime,
        arrivalHour,
        arrivalMinute
    }
}
