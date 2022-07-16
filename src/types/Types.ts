export type Country = {
    alpha2Code: string;
    alpha3Code: string;
    name: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    flag: string;
    nativeName: string;
    topLevelDomain: Array<string>;
    currencies: Array<object>;
    languages: Array<object>;
    borders: [];
}

export interface IState {
    countries: Country[];
    isLoading: boolean;
    hasError: boolean;
    countrySelected: (Country | null);
    querySearch: string;
    regionFilter: string;
    countriesFiltered: Country[];
    theme: string;
}