import css from "./SearchAdressResults.module.scss";
import { v4 as uuid } from "uuid";
import cn from "classnames";
import React, {FC} from "react";
import {Airport} from "../../../models/flights";

type SearchAddressResultsProps = {
    addresses: Airport[];
    onSelectAddress: (airport: Airport) => void;
}

export const SearchAddressResults: FC<SearchAddressResultsProps> = ({ addresses, onSelectAddress }) => {
    return (
        <div className={css.addressResult}>
            <label className={css.code}>
                Addresses
            </label>
            <ul className={css.content}>
                {addresses.map(c => (
                    <li
                        key={uuid()}
                        className={cn( css.result)}
                        onClick={() => onSelectAddress(c)}
                    >
                        <b>{c.code}</b> {c.city}
                    </li>
                ))}
            </ul>
        </div>
    )
}
