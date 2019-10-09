import * as types from '../constants/actionTypes.js'

const initialState = {
signUp: false,
loginID: null,
currentRanking: [],
pendingInvites: [],
pendingConfirmation: [],
}

const infoReducer = (state = initialState, action) => {
    
    let loginID;
    let currentRanking;
    console.log(action.payload, ' is the action.payload')
    switch (action.type) {
        case types.LOG_IN:
            loginID = action.payload.userInfo.id
            // console.log(loginID, ' is the login id!!!!')
            currentRanking = action.payload.rankings
            return {
                ...state,
                loginID: loginID,
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