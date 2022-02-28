import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  getCountries: null, // GET_COUNTRIES
  getCountriesLoading: null, // GET_COUNTRIES_SUCCESS
  getCountriesSuccess: ['countries'], // GET_COUNTRIES_SUCCESS
  getCountriesFailure: ['error'], // GET_COUNTRIES_FAILURE
  //
  getCountry: ['name'], // GET_COUNTRY
  getCountryLoading: null, // GET_COUNTRYSUCCESS
  getCountryFailure: ['error'], // GET_COUNTRY_FAILURE
  getCountrySuccess: ['country'], // GET_COUNTRY_SUCCESS
});

export const CountryTypes = Types;

export default Creators;
