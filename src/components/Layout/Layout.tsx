import React, {FC} from "react";
import css from "./Layout.module.scss";
import cn from "classnames";

interface LayoutProps {
    children: React.ReactNode;
}

const SEARCH_PAGES = ["/search-tickets", "/buy-ticket"];

export const Layout: FC<LayoutProps> = ({ children }) => {
    const isSearchPage = SEARCH_PAGES.includes(window.location.pathname);
    const isHidden = !localStorage.getItem("accessToken");

    const handleCartIconClick = () => {
        window.location.href = "/cart";
    };

    return (
        <>
            <div onClick={handleCartIconClick} className={cn("fa fa-anchor", css.cartIcon,
                {
                    [css.hidden]: isHidden,
                }
                )} icon="fas fa-shopping-cart">
                Cart
            </div>
            <div className={cn(css.layout, {
                [css.searchPage]: isSearchPage
            })}>

                <div className={css.layoutContent}>
                    { children }
                </div>
            </div>
        </>
    )
}
