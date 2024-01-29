import axios, {AxiosInstance} from "axios";
import qs from "qs";
import {refreshToken as refreshTokenRequest } from "../crud/auth.crud";
import {setErrorNotification} from "../modules/notification/state";

const axiosSetup: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000',

    headers: {
        "Content-type": "application/json",
    },

    paramsSerializer: params => qs.stringify(params, { arrayFormat: "repeat" }),
});

export const initAxiosInterceptors = (store: Store<DefaultRootState, any>): void => {
    axiosSetup.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );


    axiosSetup.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            store.dispatch(
                setErrorNotification({
                    title: error.status,
                    message: error.message,
                })
            )

            if (error == "ReferenceError: Bearer is not defined") {
                try {
                    const refreshToken = localStorage.getItem('refreshToken');
                    const response = await refreshTokenRequest({
                        refresh: refreshToken,
                    });

                    const {access, refresh} = await response.data;

                    localStorage.setItem("accessToken", access);
                    localStorage.setItem("refreshToken", refresh);

                    originalRequest.headers.Authorization = `Bearer ${access}`;
                    return axios(originalRequest);
                } catch (error) {
                }
            }

            return Promise.reject(error);
        }
    );
};


export default axiosSetup;
