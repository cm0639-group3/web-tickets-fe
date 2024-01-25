import cn from "classnames";
import css from "./SearchInput.module.scss";
import React, {FC, InputHTMLAttributes, LegacyRef, useRef} from "react";
import {TextInput, ValidationType} from "../TextInput";
import {SearchAddressResults} from "./SearchAddressResults";
import {Airport} from "../../../models/flights";
import {useOnClickOutside} from "../../../hooks/useOnClickOutside";
import {setAirports} from "../../../store/flights/actions";
import {useDispatch} from "react-redux";


interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error: string;
    label: string;
    className?: string;
    addresses: Array<Airport> | undefined;
    value?: string;
    onSelectAddress: (airport: Airport) => void;
}

export const SearchAddressInput: FC<SearchInputProps> = ({ label, value,
  error, className, addresses, onSelectAddress,
  ...inputProps}) => {
    const outsideClickRef = useRef<LegacyRef<HTMLDivElement> | undefined>(null);
    const dispatch = useDispatch();

    const handleAddressSelect = (option: Airport) => {
        //select address functionality
    }

    // const handleClickOutside = (_: MouseEvent) => {
    //     setTimeout(() => {
    //         console.log("click outside");
    //         dispatch(setAirports({
    //             airports: undefined,
    //         }));
    //     }, 100);
    // }

    // useOnClickOutside(outsideClickRef, handleClickOutside);

    return (
        <div ref={outsideClickRef.current} className={cn(css.searchInput, className)}>
            <TextInput label={label} validation={error} validationType={ValidationType.Primary} {...inputProps} />
            {addresses && <SearchAddressResults addresses={addresses} onSelectAddress={onSelectAddress} />}
        </div>
    )
}
