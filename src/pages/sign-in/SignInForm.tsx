import css from "./SignInForm.module.scss";
import { PasswordInput } from "../../components/InputBlock/PasswordInput/PasswordInput";
import { Button } from "../../components/Button/Button";
import {useState, ChangeEvent, FormEvent, useEffect} from "react";
import {Link} from "react-router-dom";
import {signIn} from "../../crud/auth.crud";
import {TextInput, ValidationType} from "../../components/InputBlock/TextInput";
import {FormValidation} from "../../components/FormValidation/FormValidation";

interface FormData {
    username: string;
    password: string;
}

export const SignInForm = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState<FormData>({
        username: '',
        password: '',
    });

    const [formValidation, setFormValidation] = useState({
        error: "",
        success: "",
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {username, password } = formData;
        setErrors({
            username: username ? '' : 'Enter your username',
            password:  password ? '' : 'Enter your password',
        });

        if (username && password) {
            await signIn({
                username,
                password,
            }).catch((error) => {
                console.log("error = ", error);
                setFormValidation({
                    error: error.message,
                    success: "",
                })
            });
        }
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
                <FormValidation validation={formValidation} />
                <TextInput name="username" value={formData.username}
                   label="Username" validation={errors.username}
                   className={css.usernameInput}
                   onChange={handleChange}
                   validationType={ValidationType.Danger} />
                <PasswordInput name="password"
                   value={formData.password}
                   error={errors.password}
                   onChange={handleChange}
                   label="Password" />
                <div className={css.resetPasswordLink}>
                    <Link to="/user/reset-password">Forgot your password?</Link>
                    <Link to="/sign-up">Sign up for free</Link>
                </div>
                <Button type="submit" btnType="primary">Sign in</Button>
            </form>
        </div>
    )
}
