import {createReducer} from 'reduxsauce';
import {INITIAL_STATE} from './initialState';
import { CountryTypes } from './action';

const getCountriesLoading = (state) => ({
  ...state,
  getCountriesLoading: true,
  getCountriesError: null,
});
const getCountriesSuccess = (state, payload) => ({
  ...state,
  getCountriesLoading: false,
  countries: payload.countries,
  getCountriesError: null,
});
const getCountriesFailure = (state, payload) => ({
  ...state,
  getCountriesError: payload.error.message,
  getCountriesLoading: false,
});

const getCountryLoading = (state) => ({
  ...state,
  getCountryLoading: true,
  getCountryError: null,
});
const getCountrySuccess = (state, payload) => {
  if (payload && payload.country && payload.country.name !== state.country?.name) {
    return {
      ...state,
      getCountryLoading: false,
      country: payload.country,
      getCountryError: null,
    }
  }
  return {
    ...state,
    getCountryLoading: false,
    getCountryError: null,
  }
};
const getCountryFailure = (state, payload) => ({
  ...state,
  getCountryError: payload.error.message,
  getCountryLoading: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [CountryTypes.GET_COUNTRIES_LOADING]: getCountriesLoading,
  [CountryTypes.GET_COUNTRIES_SUCCESS]: getCountriesSuccess,
  [CountryTypes.GET_COUNTRIES_FAILURE]: getCountriesFailure,
  //
  [CountryTypes.GET_COUNTRY_LOADING]: getCountryLoading,
  [CountryTypes.GET_COUNTRY_SUCCESS]: getCountrySuccess,
  [CountryTypes.GET_COUNTRY_FAILURE]: getCountryFailure,
});
