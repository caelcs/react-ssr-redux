import { REQUEST, RECEIVE, FAILURE } from './actions';
import { combineReducers } from 'redux';

const todos = () => {
  const all = (state = [], action) => {
    switch (action.type) {
      case REQUEST:
        return [
          ...state,
          {
            todos: {},
            completed: false
          }
        ]
      case RECEIVE:
        return [
          ...state,
          {
            todos: action.payload,
            completed: true
          }
        ]
      case FAILURE:
        return [
          ...state,
          {
            todos: action.payload,
            completed: true
          }
        ]
      default:
        return state
    }
  }

  return combineReducers({
		all
	});
}

export default todos()

export const allTodos = (state) => {
  return state.todos.all;
};
