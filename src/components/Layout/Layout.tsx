import React, {FC} from "react";
import css from "./Layout.module.scss";
import cn from "classnames";

interface LayoutProps {
    children: React.ReactNode;
}

const SEARCH_PAGES = ["/search-tickets"];

export const Layout: FC<LayoutProps> = ({ children }) => {
    const isSearchPage = SEARCH_PAGES.includes(window.location.pathname);

    return (
        <div className={cn(css.layout, {
            [css.searchPage]: isSearchPage
        })}>

            <div className={css.layoutContent}>
                { children }
            </div>
        </div>
    )
}
