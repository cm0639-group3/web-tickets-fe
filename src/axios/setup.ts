import axios from "axios";
import qs from "qs";

const axiosSetup = axios.create({
    baseURL: 'http://localhost:4000',

    headers: {
        "Accept-Language": "ru",
        "Api-Version": "2.0",
        "App-Version": "2.0",
        "App-Name": "web-tickets-fe",
        "Content-type": "application/json",
        "Platform": "3",
    },

    paramsSerializer: params => qs.stringify(params, { arrayFormat: "repeat" }),
});

export default axiosSetup;
