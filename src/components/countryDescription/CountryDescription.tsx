import { useState} from "react";
import { useAppSelector } from "../../app/hooks";
import { Country as CountryType } from "../../types/Types";
import { selectCountrySelected, selectCountriesFiltered } from "../../app/countries.slice";
import { Link, useParams } from "react-router-dom";
import './CountryDescription.scss';

const CountryDescription = () => {
    const [imageShow, setImageShow] = useState<boolean>(false);

    const countries = useAppSelector(selectCountriesFiltered);
    const params = useParams();
    let isCountryFound:(boolean | string) = 'finding';

    const getCountryByAlpha2code = (alpha2code: string): (CountryType | null) => {
        return countries.find(
            (country: CountryType) => country.alpha2Code === alpha2code
        ) || null;
    };

    let country = useAppSelector(selectCountrySelected);
    if (country) {
        isCountryFound = true;
    } else {
        country = getCountryByAlpha2code(params.alpha2code || '');
        isCountryFound = country ? true : false;
    }


    return (
        <article id="country-description">
            <nav>
                <Link to="/">
                    <button type="button">Back</button>
                </Link>
            </nav>
            {isCountryFound===true && <div id="info">
                <img
                    src={ country?.flag }
                    alt={`Flag {country?.name}`}
                    onLoad={ () => setImageShow(true) }
                    className={ imageShow ? 'loaded' : '' }
                />
                <div>
                    <h2>{ country?.name || '' }</h2>
                    <div id="data">
                        <ul>
                            <li><h3>Native Name: </h3> { country?.nativeName }</li>
                            <li><h3>Population: </h3> { country?.population }</li>
                            <li><h3>Region: </h3> { country?.region }</li>
                            <li><h3>SubRegion: </h3> { country?.subregion }</li>
                            <li><h3>Capital: </h3> { country?.capital }</li>
                        </ul>
                        <ul>
                            <li><h3>Top Level Domain: </h3> { country?.topLevelDomain.join(',') }</li>
                            <li>
                                <h3>Currencies: </h3> 
                                {
                                    country?.currencies.map(
                                        (currency:any) => currency["name"]
                                    ).join(',')
                                }
                            </li>
                            <li>
                                <h3>Languajes: </h3> 
                                {
                                    country?.languages.map(
                                        (language:any) => language["name"]
                                    ).join(',')
                                }
                            </li>
                        </ul>
                    </div>
                    <ul id="borders">
                        <li>
                            <h3>Border Countries: </h3>
                            {
                                country?.borders && country?.borders.map((border:string) => {
                                    return (
                                        <span
                                            className="border-countries"
                                            key={ border }
                                        >
                                            { border }
                                        </span>
                                    )
                                })
                            }
                        </li>
                    </ul>
                </div>
            </div>}
        </article>

    );
};

export { CountryDescription }