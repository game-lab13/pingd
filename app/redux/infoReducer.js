import * as types from '../constants/actionTypes.js'

const initialState = {
loginID: null,
currentRanking: [],
pendingInvites: [],
pendingConfirmation: [],
}

const infoReducer = (state = initialState, action) => {
    
    let loginID;
    let currentRanking;
    console.log('action', action)
    switch (action.type) {
        case types.LOG_IN:
            loginID = action.payload.currentUserInfo.id
            currentRanking = action.payload.rankings
            console.log('CURRENT', currentRanking)
            return {
                ...state,
                loginID: loginID,
                currentRanking: currentRanking
            }

        default: 
        return state;
    }
}

export default infoReducer;