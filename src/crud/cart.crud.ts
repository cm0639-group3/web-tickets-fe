import createdAxios from "../axios/setup";
import {SetCartPayload} from "../store/cart/actions";

interface GetCart {
    limit?: number;
    offset?: number;
}

export const getCart = (data: GetCart): Promise<SetCartPayload> => createdAxios.get("/api/cart", {
    limit: 1,
    offset: 1,
});
