import {useState} from "react";
import css from "./SearchTicketsForm.module.scss";
import {TextInput, ValidationType} from "../../components/InputBlock/TextInput";
import {SearchAddressInput} from "../../components/InputBlock/SearchAddressInput/SearchAddressInput";

export const SearchTicketsForm = () => {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [departmentDate, setDepartmentDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    return (<div className={css.searchTicketsForm}>
        <div className={css.searchTicketsFormHeader}>
            <div className={css.searchTicketsSubheader}>
                <button className={css.subHeaderButton}>One way</button>
                <button className={css.subHeaderButton}>Round Trip</button>
            </div>
            <div className={css.searchTicketsMainInputs}>
                <SearchAddressInput label="Source Airport"  placeholder="Source" validation={"asf"}
                    validationType={ValidationType.Primary}
                    addresses={[
                        {
                            code: "TGD",
                            city: "Podgorica Airport",
                            description: "Description of the airport",
                        },
                        {
                            code: "BRG",
                            city: "Bergamo Airport",
                            description: "Description of the airport",
                        },
                        {
                            code: "TGD",
                            city: "Podgorica Airport",
                            description: "Description of the airport",
                        }
                    ]}
                />
                <SearchAddressInput label="Destination Airport" placeholder="Destination" validation={"asf"}
                    validationType={ValidationType.Primary} />
                <SearchAddressInput label="Department Date" placeholder="Department date" validation={"asf"}
                    validationType={ValidationType.Primary} />
                <SearchAddressInput label="Return Date" placeholder="Return date" validation={"asf"}
                    validationType={ValidationType.Primary} />
            </div>
        </div>
    </div>);
}
