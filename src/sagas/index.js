import {all, fork} from 'redux-saga/effects';
import CountrySaga from './countrySaga';

export default function* root() {
  yield all([
    //
    fork(CountrySaga),
  ]);
}
