import css from "./SearchAdressResults.module.scss";
import { v4 as uuid } from "uuid";
import cn from "classnames";
import {FC} from "react";

export interface Address {
    code: string; //MLP, TGD
    city: string; //Airport of Malpensa
    description: string; //Some description of Airport or city
}

type SearchAddressResultsProps = {
    addresses: Address[];
}

export const SearchAddressResults: FC<SearchAddressResultsProps> = ({ addresses }) => {
    return (
        <div className={css.addressResult}>
            <label className={css.code}>
                Addresses
            </label>
            <ul className={css.content}>
                {addresses.map(c => (
                    <li
                        key={uuid()}
                        className={cn( css.result)}>
                        <b>{c.code}</b> {c.city}
                    </li>
                ))}
            </ul>
        </div>
    )
}
