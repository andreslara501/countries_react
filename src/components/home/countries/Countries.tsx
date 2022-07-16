import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectCountriesFiltered, selectLoadingState } from "../../../app/countries.slice";
import { Country } from "./country/Country";

import './Countries.scss';

const Countries = () => {
    const countries = useAppSelector(selectCountriesFiltered);
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectLoadingState);
    return (
        <div id="countriess">

            <ul id="countries">
                { isLoading && <h2>Cargando... </h2>}
                {countries.map((country) => (
                    <Country country={country} key={country.alpha2Code} />
                ))}
            </ul>
        </div>
    );
};

export { Countries }