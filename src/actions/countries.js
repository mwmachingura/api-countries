import * as api from '../api';
import { FETCH_ALL, FETCH_REGION } from '../constants/actionTypes';

//Action Creators
export const getCountries = () => async(dispatch) => {
    try {
        const { data } = await api.fetchCountries();

        dispatch({ type: FETCH_ALL, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
};

export const getCountriesByRegion = (region) => async(dispatch) => {
    try {
        const { data } = await api.fetchCountriesByRegion(region);

        dispatch({ type: FETCH_REGION, payload: data });
    }
    catch (error) {
        console.log(error.message);
    }
};