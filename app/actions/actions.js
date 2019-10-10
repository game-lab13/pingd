import * as types from '../constants/actionTypes.js';
import { match } from 'minimatch';

export const logInToMain = (credentials) => {

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
    fetch('/match/inviteResponse', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(matchData),
    })
    .then(response => response.json())
    .then(data => {
      dispatch( {
        type: types.REMOVE_INVITE, payload: data
      })
    })
    .catch(err => console.error(err));
  }
}

export const recordScore= (matchData) => {
  return (dispatch) => {
    fetch('/match/recordScore', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(matchData),
    })
    .then(response => response.json())
    .then(data => {
      // this dispatches to the reducer
      dispatch( {
        type: types.RECORD_SCORE, payload: data
      })
    })
    .catch(err => console.error(err));
  }
}

export const scoreConfirmation = (matchData) => {
  return (dispatch) => {
    fetch('/match/confirmScore', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(matchData),
    })
    .then(response => console.log(response))
      // this dispatches to the reducer
    .catch(err => console.error(err));
    dispatch({
          type: types.SCORE_CONFIRMATION, payload: matchData.match_id
        })
    }
}

//! test action creator
export const activateSignUp = () => ({
  type: types.SIGN_UP
})
