import {FC, MouseEvent} from "react";
import {Luggage} from "../../../models/flights";
import css from "./ListOfLuggage.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {selectLuggage} from "../../../store/flights/selectors";
import {setLuggage} from "../../../store/flights/actions";

interface ListOfLuggageProps {
    listOfLuggage: Luggage[];
}

export const ListOfLuggage: FC<ListOfLuggageProps> = ({ listOfLuggage }) => {
    const { luggage } = useSelector(selectLuggage);

    const dispatch = useDispatch();

    const handleClickLuggageType = (l: Luggage) => {
        dispatch(setLuggage(l));
    };

    return (!luggage ? <>
        <h3 className={css.listOfLuggageHeader}>Choose the luggage type</h3>
        <div className={css.listOfLuggage}>
            { listOfLuggage.map(l => {
                return <div onClick={() => handleClickLuggageType(l)} className={css.listOfLuggageCard}>
                    <div className={css.listOfLuggageCardName}>{l.name}</div>
                    <div className={css.listOfLuggageCardSize}>{l.size}</div>
                </div>
            })}
        </div>
    </> : <>
        <h3 className={css.listOfLuggageHeader}>Chosen luggage type</h3>
        <div className={css.listOfLuggage}>
            <div className={css.listOfLuggageCard}>
                <div className={css.listOfLuggageCardName}>{luggage.name}</div>
                <div className={css.listOfLuggageCardSize}>{luggage.size}</div>
            </div>
        </div>
    </>)
}
