import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';

import rootReducer from '../reducers';

const configureStore = () => {
  const preloadedState = window.PRELOADED_STATE;

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, logger)
    )
  );

  return store;
};

export default configureStore;
