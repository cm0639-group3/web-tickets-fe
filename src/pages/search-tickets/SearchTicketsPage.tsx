import {ContentHeader} from "../../components/ContentHeader/ContentHeader";
import React from "react";
import {SearchTicketsForm} from "./SearchTicketsForm";

export const SearchTicketsPage = () => {
    return (
        <div>
            <ContentHeader label="Search for tickets"
               content="Select destination and dates"
            />
            <SearchTicketsForm />
        </div>
    )
}
