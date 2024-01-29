import createdAxios from "../axios/setup";

export const createRole = () => createdAxios.post("/api/role", {
    name: "user",
});

export const getRoles = () => createdAxios.get("/api/role");

export interface SignUpData {
    email: string;
    username: string;
    password: string;
}

export const signUp = (data: SignUpData) => createdAxios.post("/api/user/register/", data)

export interface SignInData {
    username: string;
    password: string;
}

export interface SignInResponse {
    access: string;
    refresh: string;
}

export const signIn = (data: SignInData): Promise<SignInResponse> => createdAxios.post("/api/token/", data).then(response => {
    localStorage.setItem("accessToken", response.data.access);
    localStorage.setItem("refreshToken", response.data.refresh);
});

export interface RefreshTokenData {
    refresh: string;
}

export const refreshToken = (data: RefreshTokenData): Promise<SignInResponse> => createdAxios.post("api/token/refresh/", data)
    .then(response => {
    });
