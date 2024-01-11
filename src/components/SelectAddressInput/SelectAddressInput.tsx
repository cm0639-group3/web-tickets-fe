import css from "./SelectAddressInput.module.scss";
import DatePicker from "react-datepicker";
import {FC, InputHTMLAttributes} from "react";

interface SelectAddressInputProps {
    value: Date | null;
    label?: string
    onChange: (date: Date) =>  void;
}

export const SelectAddressInput: FC<SelectAddressInputProps> = ({
    label, value, onChange }) => {
    return (<div className={css.selectAddressInput}>
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
