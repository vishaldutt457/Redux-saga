import userSaga from '../Sagas/userSaga';
import {all} from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        userSaga()
    ])
}