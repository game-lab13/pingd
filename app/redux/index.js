import { combineReducers } from 'redux';

import infoReducer from './infoReducer'

const reducers = combineReducers({
    info: infoReducer 
})

export default reducers