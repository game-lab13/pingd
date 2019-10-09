import * as types from '../constants/actionTypes.js'

const initialState = {
signUp: false,
// userInfo: null,
loginUsername: '',
currentRanking: [],
pendingInvites: [],
pendingConfirmation: [],
}

const infoReducer = (state = initialState, action) => {
    
    let loginID;
    let loginUsername;
    let currentRanking;
    // console.log(action.payload, ' is the action.payload')
    switch (action.type) {
        case types.LOG_IN:
            loginUsername = action.payload.userInfo.username
            loginID = action.payload.userInfo.id
            // console.log(loginID, ' is the login id!!!!')
            currentRanking = action.payload.rankings
            return {
                ...state,
                loginID: loginID,
                loginUsername: loginUsername,
                currentRanking: currentRanking
            }
        
        case types.SIGN_UP:

            return {
                ...state,
                signUp: true,
            }

        default: 
        return state;
    }
}

export default infoReducer;