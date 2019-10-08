import { REQUEST, RECEIVE, FAILURE } from './actions';
import { combineReducers } from 'redux';

const todosState = () => {
  const all = (state = {}, action) => {
    switch (action.type) {
      case REQUEST:
        return Object.assign({}, state, {
          results: {},
          completed: false
        })
      case RECEIVE:
        return Object.assign({}, state, {
          results: action.payload,
          completed: true
        })
      case FAILURE:
        return Object.assign({}, state, {
          results: action.payload,
          completed: true
        })
      default:
        return state
    }
  }

  return combineReducers({
		all
	});
}

export default todosState()

export const allTodos = (state) => {
  return state.todosState.all;
};
