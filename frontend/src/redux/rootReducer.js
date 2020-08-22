import {combineReducers} from 'redux'

import userReducer from './user/userReducer'
import authReducer from './user/authReducer'
import notificationReducer from './notification/notificationReducer'

export default combineReducers({
    user: userReducer,
    auth: authReducer,
    notification: notificationReducer
})