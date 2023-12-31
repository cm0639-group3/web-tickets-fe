import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage } from "../pages/sign-in/SignInPage";
import { SignUpPage } from "../pages/sign-up/SignUpPage";
import {SearchTicketsPage} from "../pages/search-tickets/SearchTicketsPage";

export const AppRoutes = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="sign-up" element={<SignUpPage />} />
                <Route path="search-tickets" element={<SearchTicketsPage />} />
             </Routes>
        </BrowserRouter>)}
