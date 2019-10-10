import * as types from '../constants/actionTypes.js';

export const logInToMain = (credentials) => {

  return (dispatch) => {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    .then(response => response.json())
    .then(data => {
      console.log('data from SERVER', data)
      dispatch( {
        type: types.LOG_IN, payload: data
      })
    })
    .catch(err => console.error(err));
  }
}

export const signUp = (credentials) => {

  return (dispatch) => {
    fetch('/signup', {
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

export const createMatch = (matchData) => {

  return (dispatch) => {
    fetch('/match/requestMatch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(matchData),
    })
    .then(response => response.json())
    .then(data => {
      dispatch( {
        type: types.CREATE_MATCH, payload: data
      })
    })
    .catch(err => console.error(err));
  }
}

export const removeInvite = (matchData) => {

  return (dispatch) => {
    fetch('/match/requestMatch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(matchData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // dispatch( {
      //   type: types.CREATE_MATCH, payload: data
      // })
    })
    .catch(err => console.error(err));
  }
}

//! test action creator
export const activateSignUp = () => ({
  type: types.SIGN_UP
})
