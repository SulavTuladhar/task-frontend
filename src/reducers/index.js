// Reducers holds logic to change store
import { combineReducers } from 'redux';
import { UserReducer } from './user.red';


export const RootReducer = combineReducers({
    user: UserReducer
})