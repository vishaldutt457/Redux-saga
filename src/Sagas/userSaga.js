import { put, takeLatest, call } from 'redux-saga/effects';
import {
  userRequest,
  userSuccess,
  userError
} from '../userSlice';
import axios from 'axios';

const userApi=async()=>{
    const response =await axios.get(`https://reqres.in/api/users`);
    return response.data.data
}

function* getUserRequest() {
    try {
      const data = yield call(userApi);
      console.log(data)
      yield put(userSuccess(data));
    } catch {
      yield put(userError({ description: 'Something went wrong' }));
    }
}

export default function* userSaga() {
  yield takeLatest(userRequest, getUserRequest);
}


