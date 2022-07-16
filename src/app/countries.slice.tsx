import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IState, Country } from "../types/Types";
import type { RootState } from '../app/store';
import { getCountries } from './getCompanies.thunk';

const searchCountry = (region: string, countries: Country[], querySearch: string): Country[] => {
    countries = JSON.parse(JSON.stringify(countries));
    return countries.filter(
        (country: Country) => {
            if (
                country["name"].toUpperCase().includes(querySearch.toUpperCase())
                && (country["region"] === region || region === 'All')
            )
                return true;
        }
    );
};

const inicialState:IState = {
    countries: [],
    isLoading: true,
    hasError: false,
    countrySelected: null,
    querySearch: '',
    regionFilter: 'All',
    countriesFiltered: [],
    theme: 'light'
};

export const slice = createSlice({
    name: 'countries',
    initialState: inicialState,
    reducers: {
        setCountrySelected: (state, action: PayloadAction<Country>) => {
            state.countrySelected = action.payload
        },
        setQuerySearch: (state, action: PayloadAction<string>) => {
            state.querySearch = action.payload;
            state.countriesFiltered = searchCountry(state.regionFilter, state.countries, action.payload);
        },
        setRegionFilter: (state, action: PayloadAction<string>) => {
            state.regionFilter = action.payload;
            state.countriesFiltered = searchCountry(action.payload, state.countries, state.querySearch);
        },
        toggleModeTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCountries.pending, (state) => {
          state.isLoading = true;
          state.hasError = false;
        })
        .addCase(getCountries.fulfilled, (state, action) => {
            state.countries = action.payload || [];
            state.countriesFiltered = action.payload || [];
            state.isLoading = false;
            state.hasError = false
        })
        .addCase(getCountries.rejected, (state) => {
            state.hasError = true
            state.isLoading = false;
        })
    },
});

export { getCountries };
export const { setCountrySelected, setQuerySearch, setRegionFilter, toggleModeTheme } = slice.actions;

export const selectCountriesFiltered = (state: RootState) => state.countries.countriesFiltered;
export const selectCountrySelected = (state: RootState) => state.countries.countrySelected;
export const selectLoadingState = (state: RootState) => state.countries.isLoading;
export const selectErrorState = (state: RootState) => state.countries.hasError;
export const selectQuerySearch = (state: RootState) => state.countries.querySearch;
export const selectRegionFilter = (state: RootState) => state.countries.regionFilter;
export const selectTheme = (state: RootState) => state.countries.theme;

export default slice.reducer;