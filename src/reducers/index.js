import { combineReducers } from 'redux';
import todosState from '../client/components/reducers';

const rootReducer = combineReducers({
  todosState
});
export default rootReducer;
