import css from "./FormValidation.module.scss";
import { FC } from "react";
import cn from "classnames";

interface FormValidationProps {
    validation: {
        error: string;
        success: string;
    };
}

export const FormValidation: FC<FormValidationProps> = ({ validation }) => {
    const { error, success } = validation;
    if (!error && !success) return null;

    return (
        <div className={cn(css.formValidation,
            {[css.error]: error,
             [css.success]: success
            })}>
            {error || success}
        </div>
    )
}
