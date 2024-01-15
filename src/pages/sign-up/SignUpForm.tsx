import {EmailInput} from "../../components/InputBlock/EmailInput";
import {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "../../components/Button/Button";
import css from "./SignUpForm.module.scss";
import {TextInput, ValidationType} from "../../components/InputBlock/TextInput";
import {Link} from "react-router-dom";
import {PasswordInput} from "../../components/InputBlock/PasswordInput/PasswordInput";
import {signUp} from "../../crud/auth.crud";
import {FormValidation} from "../../components/FormValidation/FormValidation";

interface FormData {
    username: string;
    email: string;
    password: string;
    repeatedPassword: string;
}

enum PasswordError {
    DoesntMatch = "Passwords doesn't match",
    Repeat = "Repeat your password",
}

export const SignUpForm = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        repeatedPassword: ''
    });
    const [errors, setErrors] = useState<FormData>({
        username: '',
        email: '',
        password: '',
        repeatedPassword: ''
    });

    const [formValidation, setFormValidation] = useState({
        error: "",
        success: "",
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, email, password, repeatedPassword } = formData;
        const usernameError = username ? '' : 'Enter your username';
        const emailError = email ? '' : 'Enter your email';
        const passwordError = password ? '' : 'Create password';
        let repeatedPasswordError = '';

        if (repeatedPassword && password !== repeatedPassword) {
            repeatedPasswordError = PasswordError.DoesntMatch
        } else if (!repeatedPassword) {
            repeatedPasswordError = PasswordError.Repeat;
        }

        setErrors({
            username: usernameError,
            email: emailError,
            password: passwordError,
            repeatedPassword: repeatedPasswordError,
        });

        if (email && password && username) {
            await signUp({
                username,
                email,
                password
            }).catch(function (error) {
                setFormValidation({
                    error: error.message,
                    success: "",
                })
            }).then(() => setFormValidation({
                error: "",
                success: "You have registered successfully. Go to sign in page",
            }))
        };
    }


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className={css.signUpForm}>
            <form onSubmit={handleSubmit}>
                <FormValidation validation={formValidation} />
                <TextInput name="username" value={formData.username}
                   label="Username" validation={errors.username}
                   className={css.usernameInput}
                   onChange={handleChange}
                   validationType={ValidationType.Danger} />
                <EmailInput name="email" value={formData.email} error={errors.email} onChange={handleChange} label="Email" />
                <PasswordInput name="password" value={formData.password} error={errors.password}
                   className={css.passwordInput} onChange={handleChange} label="Password" />
                <PasswordInput name="repeatedPassword" value={formData.repeatedPassword}
                   error={errors.repeatedPassword}
                   className={css.repeatPasswordInput} onChange={handleChange} label="Repeat password" />
                <div className={css.resetPasswordLink}>
                    <span>Already have an account?&nbsp;</span>
                    <Link to="/">Sign in</Link>
                </div>
                <Button type="submit" btnType="primary">Sign up</Button>
            </form>
        </div>
    )
}
