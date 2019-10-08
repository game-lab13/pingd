import * as types from '../constants/actionTypes.js';

export const logInToMain = (credentials) => {

  console.log('HERE!',credentials);

  return (dispatch) => {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    .then(response => response.json())
    .then(data => {
      dispatch( {
        type: types.LOG_IN, payload: data
      })
    })
    .catch(err => console.error(err));
  }
}

export const testLogIn = (data) => ({
  type: types.LOG_IN, payload: {currentUserLoggedIn:true}
})
