import css from "./SignInForm.module.scss";
import { EmailInput } from "../../components/InputBlock/EmailInput";
import { PasswordInput } from "../../components/InputBlock/PasswordInput/PasswordInput";
import { Button } from "../../components/Button/Button";
import { useState, ChangeEvent, FormEvent } from "react";
import {Link} from "react-router-dom";

interface FormData {
    email: string;
    password: string;
}

export const SignInForm = () => {

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<FormData>({
        email: '',
        password: '',
    });

    const [formValidation, setFormValidation] = useState({
        error: "",
        success: "",
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {email, password } = formData;
    }


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className={css.signInForm}>
            <form onSubmit={handleSubmit}>
                {/*<FormValidation validation={formValidation} />*/}
                <EmailInput name="email"
                            value={formData.email}
                            error={errors.email}
                            onChange={handleChange}
                            label="Email" />
                <PasswordInput name="password"
                               value={formData.password}
                               error={errors.password}
                               onChange={handleChange}
                               label="Password" />
                <div className={css.resetPasswordLink}>
                    <Link to="/user/reset-password">Forgot your password?</Link>
                    <Link to="/sign-up">Sign up for free</Link>
                </div>
                <Button
                    type="submit" btnType="primary">Sign in</Button>
            </form>
        </div>
    )
}
