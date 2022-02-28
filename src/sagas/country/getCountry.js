import {put} from 'redux-saga/effects';
import Api from '../../shared/api';

import CountryActions from '../../store/country/action';

function* getCountry(param) {
  try {
    yield put(CountryActions.getCountryLoading());
    const country = yield Api.getCountry(param.name);
    yield put(CountryActions.getCountrySuccess(country[0]));
  } catch (error) {
    console.log(error)
    yield put(CountryActions.getCountryFailure(error));
  }
}

export default getCountry;
