import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';

import rootReducer from '../../reducers';

const configureStore = () => {
  const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, logger)));
  return store;
};

const storeMiddleware = () => (req, res, next) => {
  const store = configureStore();
  req.store = store;
  next();
};

export default storeMiddleware;
