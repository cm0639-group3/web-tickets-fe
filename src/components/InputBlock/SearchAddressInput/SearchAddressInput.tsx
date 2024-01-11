import cn from "classnames";
import css from "./SearchInput.module.scss";
import {FC, InputHTMLAttributes} from "react";
import {TextInput, ValidationType} from "../TextInput";
import {Address, SearchAddressResults} from "./SearchAddressResults";


interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error: string;
    label: string;
    className?: string;
    addresses?: Array<Address>;
    value?: string;
}

export const SearchAddressInput: FC<SearchInputProps> = ({ label, value,
  error, className, addresses,
  ...inputProps}) => {
    const handleAddressSelect = (option: Address) => {
        //select address functionality
    }
    return (
        <div className={cn(css.searchInput, className)}>
            <TextInput label={label} validation={error} validationType={ValidationType.Primary} {...inputProps} />
            {addresses && <SearchAddressResults addresses={addresses} />}
        </div>
    )
}
