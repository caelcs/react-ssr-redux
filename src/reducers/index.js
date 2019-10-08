import { combineReducers } from 'redux';
import todos from '../client/components/reducers';

const rootReducer = combineReducers({
  todos
});
export default rootReducer;
