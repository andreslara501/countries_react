import axios from 'axios';
import { Country } from '../types/Types';

export const getCountriesAPI = async() => {
    return new Promise<any>(async (resolve, reject) => {
        try {
            const result:any = await axios.get(process.env.REACT_APP_API_URL || '');

            resolve(result);
        } catch (error) {
            reject(new Error("Can't get countries from API " + error));
        }
    });
}