import * as types from '../constants/actionTypes.js'

const initialState = {
signUp: false,
loginID: null,
loginUsername: '',
invitesReceived: [],
invitesSent: [],
scoresToConfirm: [],
scoresToRecord: [],
currentRanking: [],
}

const infoReducer = (state = initialState, action) => {
    
    let loginID;
    let loginUsername;
    let currentRanking;
    let invitesReceived;
    let invitesSent;
    let scoresToConfirm;
    let scoresToRecord;

    switch (action.type) {
        case types.LOG_IN:
            loginID = action.payload.userInfo.id
            loginUsername = action.payload.userInfo.username
            currentRanking = action.payload.rankings
            invitesReceived = action.payload.invitesReceived
            invitesSent = action.payload.invitesSent
            scoresToConfirm = action.payload.scoresToConfirm
            scoresToRecord = action.payload.scoresToRecord

            return {
                ...state,
                loginID,
                loginUsername,
                currentRanking,
                invitesReceived,
                invitesSent,
                scoresToConfirm,
                scoresToRecord
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