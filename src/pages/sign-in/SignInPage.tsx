import { ContentHeader } from "../../components/ContentHeader/ContentHeader";
import { SignInForm } from "./SignInForm";

export const SignInPage = () => {
    return (
        <div>
            <ContentHeader label="Sign in to Flight Tickets"
               content="Sign in using your email and password"
            />
            <SignInForm />
        </div>
    )
}

