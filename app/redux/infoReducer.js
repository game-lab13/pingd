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
    
    switch (action.type) {
        case types.LOG_IN:
            loginID = action.payload.currentUserInfo.id
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