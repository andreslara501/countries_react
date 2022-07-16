import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getCountries, selectTheme } from "../app/countries.slice";
import './dark.css';
import './light.css';

const Theme = ({ children } : { children:any }) => {
    const theme = useAppSelector(selectTheme);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCountries());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={theme}>
            {children}
        </div>
    );
};

export { Theme }