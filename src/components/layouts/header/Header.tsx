import { useEffect, useState } from "react";
import { ToggleColors } from "./toggleColors/ToggleColors";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectLoadingState, getCountries } from "../../../app/countries.slice";
import './Header.scss';

const Header = () => {
    const dispatch = useAppDispatch();
    dispatch(getCountries());

    return (
        <header>
            <div id="content">
                <h1>Where in the world?</h1>
                <ToggleColors />
            </div>
        </header>
    );
};

export { Header }