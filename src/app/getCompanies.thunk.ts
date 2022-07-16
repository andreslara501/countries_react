import { createAsyncThunk } from "@reduxjs/toolkit";
import { Country } from "../types/Types";
import { getCountriesAPI } from '../services/countries.service';

const getCountries = createAsyncThunk("countries/getCountries",
    async () => {
        try {
            const { data }: { data: Country[] } = await getCountriesAPI();
            return data || [];
        } catch (error) { console.error(error) }
    }
);

export { getCountries };