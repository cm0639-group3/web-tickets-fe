import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import css from "./SearchTicketsForm.module.scss";
import {SearchAddressInput} from "../../components/InputBlock/SearchAddressInput/SearchAddressInput";
import 'react-datepicker/dist/react-datepicker.css'
import {SelectAddressInput} from "../../components/SelectAddressInput/SelectAddressInput";
import Switch from "react-switch";
import Select from 'react-select'
import {addFlight } from "../../crud/flights.crud";
import {requestGetAirports, setAirports, requestGetFlights, sortFlightsList} from "../../store/flights/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectAirports, selectFlights} from "../../store/flights/selectors";
import {Button} from "../../components/Button/Button";
import {Airport} from "../../models/flights";
import cn from "classnames";


//Filter by Select options
const FILTER_BY_OPTIONS = [
    { value: 'asc', label: 'Low Price' },
    { value: 'desc', label: 'High Price' },
];

interface FilterBy {
    value: string;
    label: string;
}

export const SearchTicketsForm = () => {
    const [source, setSource] = useState<Airport | null>(null);
    const [destination, setDestination] = useState<Airport | null>(null);
    const [departmentDate, setDepartmentDate] = useState<Date | null>(null);
    const [selectFilter, setSelectFilter] = useState<FilterBy>(null);

    const dispatch = useDispatch();

    useEffect(() => {
        if (selectFilter) {
            dispatch(sortFlightsList({
                sortBy: "base_price",
                isAsc: selectFilter.value == "asc",
            }));
        }
    }, [selectFilter]);

    const { airports, isSourceAirport } = useSelector(selectAirports);

    const handleFilterChange = (selectedOption: FilterBy) => {
        setSelectFilter(selectedOption);
    }

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
        setDestination(airport);
    };

    const handleSelectSourceAddress = (airport: Airport) => {
        setSource(airport);
    }

    const handleSubmitSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(requestGetFlights({
            source_airport: source?.id,
            destination_airport: destination?.id,
            departure_time: departmentDate.toISOString().substring(0, 10),
        }));
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
                    disabled={!departmentDate || !source || !destination}
                    onClick={handleSubmitSearch}>
                    Search
                </Button>

                {/*{isRoundWay && <SelectAddressInput label={"Return Date"} value={returnDate}*/}
                {/*    onChange={(d) => setReturnDate(d)}/>}*/}
            </div>
        </div>
        <div className={css.filterTicketsContainer}>
            <Select onChange={handleFilterChange}
                    options={FILTER_BY_OPTIONS}
                    placeholder="Filter by" />
        </div>
    </div>);
}
