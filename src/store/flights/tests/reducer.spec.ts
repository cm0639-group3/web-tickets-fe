
import { flightsReducer } from "../reducer"
import {createMockedFlight} from "./createMockedFlight";
import {FlightsActions} from "../actions";

const mockedFlight = createMockedFlight();

describe("Flights reducer:", () => {
    it("should return initial state", () => {
        // console.log("mockedFlight = ", mockedFlight);
        // console.log("ghtsReducer(undefined, {} as FlightsActions) = ", flightsReducer(undefined, {} as FlightsActions));
        expect(flightsReducer(undefined, {} as FlightsActions)).toEqual({
            flights: [],
        });
    });
});
