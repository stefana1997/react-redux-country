import {combineReducers} from 'redux';
import {reducer as CountryReducer} from './country/reducers';

import rootSaga from '../sagas/index';
import configureStore from './configureStore';

const createStore = () => {
  const rootReducer = combineReducers({
    country: CountryReducer,
  });

  return configureStore(rootReducer, rootSaga);
};

export default createStore;