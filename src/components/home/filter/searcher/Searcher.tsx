import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { selectTheme, setQuerySearch, selectQuerySearch } from "../../../../app/countries.slice";
import searchIcon from '../../../../assets/searchIcon.svg';

import './Searcher.css';
import { useEffect, useState } from "react";

const Searcher = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector(selectTheme);
    const querySearch = useAppSelector(selectQuerySearch);
    const [value, setValue] = useState(querySearch);

    useEffect(() => {
        dispatch(setQuerySearch(value));
    }, [value]);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <div id="search">
                <img
                    src={searchIcon}
                    alt="Search"
                    style={ { filter: theme === 'dark' ? 'invert(1)' : '' } }
                />
                <input
                    type="text"
                    placeholder="Search for a country..."
                    onChange={handleChange}
                    defaultValue={querySearch}
                />
            </div>
        </div>
    );
};

export { Searcher }