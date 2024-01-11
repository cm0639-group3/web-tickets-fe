import {useState} from "react";
import css from "./SearchTicketsForm.module.scss";
import {SearchAddressInput} from "../../components/InputBlock/SearchAddressInput/SearchAddressInput";
import 'react-datepicker/dist/react-datepicker.css'
import {SelectAddressInput} from "../../components/SelectAddressInput/SelectAddressInput";
import Switch from "react-switch";

export const SearchTicketsForm = () => {
    const [isRoundWay, setIsRoundWay] = useState(false);
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [departmentDate, setDepartmentDate] = useState<Date | null>(null);
    const [arrivalDate, setArrivalDate] = useState<Date | null>(null);

    return (<div className={css.searchTicketsForm}>
        <div className={css.searchTicketsFormHeader}>
            <div className={css.searchTicketsSubheader}>
                <label className={css.isRoundWayLabel}>Is round way trip?</label>
                <Switch onChange={(i) => setIsRoundWay(i)} checked={isRoundWay} />
            </div>
            <div className={css.searchTicketsMainInputs}>
                <SearchAddressInput label="Source Airport"  placeholder="Source"
                    error=""
                    // validation={"asf"}
                    // validationType={ValidationType.Primary}
                    // addresses={[
                    //     {
                    //         code: "TGD",
                    //         city: "Podgorica Airport",
                    //         description: "Description of the airport",
                    //     },
                    //     {
                    //         code: "BRG",
                    //         city: "Bergamo Airport",
                    //         description: "Description of the airport",
                    //     },
                    //     {
                    //         code: "TGD",
                    //         city: "Podgorica Airport",
                    //         description: "Description of the airport",
                    //     }
                    // ]}
                />
                <SearchAddressInput label="Destination Airport" placeholder="Destination" error=""
                    // validation={"asf"}
                    // validationType={ValidationType.Primary}
                />
                <SelectAddressInput label={"Department Date"} value={departmentDate}
                    onChange={(d) => setDepartmentDate(d)}/>
                {isRoundWay && <SelectAddressInput label={"Arrival Date"} value={arrivalDate}
                    onChange={(d) => setArrivalDate(d)}/>}
            </div>
        </div>
    </div>);
}
