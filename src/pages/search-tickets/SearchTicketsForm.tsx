import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import css from "./SearchTicketsForm.module.scss";
import {SearchAddressInput} from "../../components/InputBlock/SearchAddressInput/SearchAddressInput";
import 'react-datepicker/dist/react-datepicker.css'
import {SelectAddressInput} from "../../components/SelectAddressInput/SelectAddressInput";
import Switch from "react-switch";
import Select from 'react-select'
import {addFlight } from "../../crud/flights.crud";
import {requestGetAirports, setAirports, requestGetFlights} from "../../store/flights/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectAirports, selectFlights} from "../../store/flights/selectors";
import {Button} from "../../components/Button/Button";
import {Airport} from "../../models/flights";
import cn from "classnames";


export const SearchTicketsForm = () => {
    // const [isRoundWay, setIsRoundWay] = useState(false);
    const [source, setSource] = useState<Airport | null>(null);
    const [destination, setDestination] = useState<Airport | null>(null);
    const destinationInputRef = useRef<HTMLLabelElement | null>(null);
    const sourceInputRef = useRef<HTMLLabelElement | null>(null);
    const [departmentDate, setDepartmentDate] = useState<Date | undefined>(null);
    const [returnDate, setReturnDate] = useState<Date | null>(null);
    const dispatch = useDispatch();

    // console.log("source = ", source);
    console.log("departmentDate = ", departmentDate);

    const { airports, isSourceAirport } = useSelector(selectAirports);
    const { flights } = useSelector(selectFlights);

    console.log("flights = ", flights);

    const options = [
        { value: 'low-price', label: 'Low Price' },
        { value: 'high-price', label: 'High Price' },
        { value: 'less-number-of-transfers', label: 'Less Number of transfers' }
    ];

    const handleChangeSourceAirport = (event: ChangeEvent) => {
        dispatch(requestGetAirports({
            name: event.target.value,
            isSourceAirport: true,
        }));
    }

    const handleChangeDestinationAirport = (event: ChangeEvent) => {
        dispatch(requestGetAirports({
            name: event.target.value,
            isSourceAirport: false,
        }));
    }

    const handleSelectDestinationAddress = (airport: Airport) => {
        console.log("airport = ", airport);
        // setTimeout(() => {
            setDestination(airport);
        // }, 0);
    };

    const handleSelectSourceAddress = (airport: Airport) => {
        console.log("airport = ", airport);
        // setTimeout(() => {
            setSource(airport);
        // }, 0);
    }

    const handleSubmitSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        // console.log("departmentDate = ", departmentDate.toISOString().substring(0, 10));
        dispatch(requestGetFlights({
            source_airport: source?.id,
            destination_airport: destination?.id,
            // departure_time: departmentDate.toISOString().substring(0, 10),
        }))

    }

    return (<div className={css.searchTicketsForm}>
        <div className={css.searchTicketsFormHeader}>
            <div className={css.searchTicketsSubheader}>
                {/*//TODO: Return is RoundWay Switch component when BE will be ready*/}
                {/*<label className={css.isRoundWayLabel}>Is round way trip?</label>*/}
                {/*<Switch onChange={(i) =>     setIsRoundWay(i)} checked={isRoundWay} />*/}
            </div>
            <div className={css.searchTicketsMainInputs}>
                <SearchAddressInput
                    value={source?.name || ""}
                    className={cn({[css.inputSelected]: !!source?.name})}
                    onChange={handleChangeSourceAirport}
                    label="Source Airport"
                    placeholder="Source"
                    error=""
                    addresses={isSourceAirport ? airports: undefined}
                    onSelectAddress={handleSelectSourceAddress}

                />
                <SearchAddressInput
                    value={destination?.name || ""}
                    className={cn({[css.inputSelected]: !!destination?.name})}
                    onChange={handleChangeDestinationAirport}
                    label="Destination Airport"
                    placeholder="Destination"
                    error=""
                    addresses={!isSourceAirport ? airports : undefined}
                    onSelectAddress={handleSelectDestinationAddress}
                />
                <SelectAddressInput
                    label={"Departure Date"}
                    className={cn({[css.inputSelected]: !!departmentDate})}
                    value={departmentDate}
                    onChange={(d) => setDepartmentDate(d)}/>

                <Button className={css.searchTicketsFormSubmitButton}
                    btnType="primary"
                    onClick={handleSubmitSearch}>
                    Search
                </Button>

                {/*{isRoundWay && <SelectAddressInput label={"Return Date"} value={returnDate}*/}
                {/*    onChange={(d) => setReturnDate(d)}/>}*/}
            </div>
        </div>
        <div className={css.filterTicketsContainer}>
            <Select options={options} placeholder="Filter by" />
        </div>
    </div>);
}
