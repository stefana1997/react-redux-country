/* eslint-disable import/no-anonymous-default-export */
import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

const composerEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  // Connect the Sagas to the Redux Store
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);

  enhancers.push(composerEnhanced(applyMiddleware(...middleware)));

  const store = createStore(rootReducer, compose(...enhancers));

  // Kick off the root saga
  sagaMiddleware.run(rootSaga);

  return store;
};
