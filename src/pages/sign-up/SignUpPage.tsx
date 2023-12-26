import {ContentHeader} from "../../components/ContentHeader/ContentHeader";
import {SignUpForm} from "./SignUpForm";

export const SignUpPage = () => {

    return (
        <div>
            <ContentHeader label="Sign up for free to Flight Tickets"
               content="Sign up using your email and password"
            />
            <SignUpForm />
        </div>
    )
}
