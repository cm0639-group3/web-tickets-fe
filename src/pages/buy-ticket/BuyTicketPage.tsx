import {ContentHeader} from "../../components/ContentHeader/ContentHeader";
import {Button} from "../../components/Button/Button";
import {TicketInfo} from "./TicketInfo";
import Cards from 'react-credit-cards-2';
import {useState} from "react";

export const BuyTicketPage = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    return (<div>
        <ContentHeader label={"Buy ticket"}
           content={"Below there is an information about chosen ticket. If everything correct click buy button"} />
        <TicketInfo />
        {/*<div>*/}
        {/*    <Cards*/}
        {/*        number={state.number}*/}
        {/*        expiry={state.expiry}*/}
        {/*        cvc={state.cvc}*/}
        {/*        name={state.name}*/}
        {/*        focused={state.focus}*/}
        {/*    />*/}
        {/*    <form>*/}
        {/*        <input*/}
        {/*            type="number"*/}
        {/*            name="number"*/}
        {/*            placeholder="Card Number"*/}
        {/*            value={state.number}*/}
        {/*            onChange={handleInputChange}*/}
        {/*            onFocus={handleInputFocus}*/}
        {/*        />*/}
        {/*        ...*/}
        {/*    </form>*/}
        {/*</div>*/}
        <Button
            type="submit" btnType="primary">Buy this ticket</Button>
    </div>);
}
