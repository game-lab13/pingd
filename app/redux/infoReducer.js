import * as types from '../constants/actionTypes.js'

const initialState = {
currentUserLoggedIn: false,
currentRanking: [],
}

const infoReducer = (state = initialState, action) => {
    let logInStatus;
    let currentRanking;
    console.log('action', action)
    switch (action.type) {
        case types.LOG_IN:
            logInStatus = action.payload.currentUserLoggedIn

            return {
                ...state,
                currentUserLoggedIn: logInStatus
            }

        default: 
        return state;
    }
}

export default infoReducer;