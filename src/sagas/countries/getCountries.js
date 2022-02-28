import {put} from 'redux-saga/effects';
import Api from '../../shared/api';

import CountryActions from '../../store/country/action';

function* getCountries() {
  try {
    yield put(CountryActions.getCountriesLoading());
    const countries = yield Api.getCountries();
    yield put(CountryActions.getCountriesSuccess(countries));
  } catch (error) {
    yield put(CountryActions.getCountriesFailure(error));
  }
}

export default getCountries;
