import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInPage } from "../pages/sign-in/SignInPage";
import { SignUpPage } from "../pages/sign-up/SignUpPage";
import {SearchTicketsPage} from "../pages/search-tickets/SearchTicketsPage";
import {AddToCartPage} from "../pages/buy-ticket/AddToCartPage";
import {CartPage} from "../pages/cart/CartPage";
import {AppNotificationContainer} from "../modules/notification";

export const AppRoutes = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="sign-up" element={<SignUpPage />} />
                <Route path="search-tickets" element={<SearchTicketsPage />} />
                <Route path="add-to-cart/:id" element={<AddToCartPage />} />
                <Route path="cart" element={<CartPage />} />
             </Routes>
            <AppNotificationContainer />
        </BrowserRouter>)}
