import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setRegionFilter, selectRegionFilter } from "../../../../app/countries.slice";

import './Region.scss';
import { useState } from "react";

const Region = () => {
    const dispatch = useAppDispatch();

    const regionFilter = useAppSelector(selectRegionFilter);
    const [region, setRegion] = useState(regionFilter);
    const [showOptions, setShowOptions] = useState(false);

    const options = [
        'All',
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania'
    ]

    const toggledShowOptions = (): void => {
        setShowOptions(!showOptions);
    };

    const selectOption = (option: string): void => {
        setRegion(option);
        setShowOptions(false);
        dispatch(setRegionFilter(option));
    }

    return (
        <div id="region">
            <div id="select" onClick={ () => toggledShowOptions() }>
                { region === 'All' ? 'Filter by Region' : region }
            </div>
            { showOptions &&
                <ul id="options">
                    { options.map((option: string) => (
                        <li
                            onClick={ () => selectOption(option) }
                            key={ option }
                            className={ region === option ? 'selected' : '' }
                        >
                            { option }
                        </li>
                    )) }
                </ul>
            }
        </div>
    );
};

export { Region }