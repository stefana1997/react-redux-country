import {all, takeLatest} from 'redux-saga/effects';

import {CountryTypes} from '../store/country/action';
import getCountries from './countries/getCountries';
import getCountry from './country/getCountry';

export default function* root() {
  yield all([
    // Get country
    takeLatest(CountryTypes.GET_COUNTRY, (param) => getCountry(param)),
    // Get countries
    takeLatest(CountryTypes.GET_COUNTRIES, getCountries),
  ]);
}
