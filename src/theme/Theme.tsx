import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectLoadingState, getCountries, selectTheme } from "../app/countries.slice";
import './dark.css';
import './light.css';

const Theme = ({ children } : { children:any }) => {
    const theme = useAppSelector(selectTheme);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCountries())
    }, []);

    const isLoading = useAppSelector(selectLoadingState);

    return (
        <div className={theme}>
            {children}
        </div>
    );
};

export { Theme }