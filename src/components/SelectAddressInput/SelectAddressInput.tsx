import cn from "classnames";
import css from "./SelectAddressInput.module.scss";
import DatePicker from "react-datepicker";
import {FC, InputHTMLAttributes} from "react";

interface SelectAddressInputProps {
    value: Date | null;
    label?: string
    onChange: (date: Date) =>  void;
    className?: string;
}

export const SelectAddressInput: FC<SelectAddressInputProps> = ({
    label, value, className, onChange }) => {
    return (<div className={cn(css.selectAddressInput, className)}>
        <div>
            {label && (
                <label className={css.label}>
                    {label}
                </label>
            )}
            <DatePicker selected={value} onChange={onChange} />
        </div>
    </div>)
}
