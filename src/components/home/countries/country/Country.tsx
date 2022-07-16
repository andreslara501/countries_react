import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../app/hooks";
import { Country as CountryType } from "../../../../types/Types";
import { setCountrySelected } from "../../../../app/countries.slice";

import './Country.scss';

const Country = (props: { country: CountryType }) => {
    const dispatch = useAppDispatch();

    const [imageShow, setImageShow] = useState<boolean>(false);

    const { country:country } = props;
    const selectCountry = (country:CountryType): void => {
        dispatch(setCountrySelected(country));
    }

    return (
        <li className="country">
            <Link to={`/country/${country.alpha2Code}`} onClick={() => selectCountry(country)}>
                <img
                    src={ country.flag }
                    onLoad={ () => setImageShow(true) }
                    className={ imageShow ? 'loaded' : '' }
                />
                <div className="info">
                    <h2>{ country.name }</h2>
                    <ul>
                        <li>
                            <h3>Population:</h3> { country.population }
                        </li>
                        <li>
                            <h3>Region:</h3> { country.region }
                        </li>
                        <li>
                            <h3>Capital:</h3> { country.capital }
                        </li>
                    </ul>
                </div>
            </Link>
        </li>
    );
};

export { Country }