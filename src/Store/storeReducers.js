import  userReducer from '../userSlice';
import {combineReducers} from 'redux';

const reducers=combineReducers({
    user:userReducer
})

export default reducers;