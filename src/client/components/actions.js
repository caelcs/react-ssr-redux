import fetch from 'isomorphic-fetch';

export const REQUEST = '/todos/REQUEST';

function requestTodos() {
  return {
    type: REQUEST
  }
}

export const RECEIVE = '/todos/RECEIVE';

function receiveTodos(payload) {
  return {
    type: RECEIVE,
    payload: payload
  }
}

export const FAILURE = '/todos/FAILURE';

function failureTodos(message) {
  return {
    type: FAILURE,
    payload: message
  }
}

export function fetchTodos() {
  return function (dispatch) {
    dispatch(requestTodos());
    return fetch(`http://localhost:3000/fetchtodos`, { mode: 'no-cors'})
      .then(response => {
        if (response.status >= 400) {
          dispatch(failureTodos("Bad response from server"));
        }
        return response.json();
      })
      .then(user =>
        dispatch(receiveTodos(user))
      );
  }
}
