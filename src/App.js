import React, {useEffect} from 'react';
import { userRequest, userSuccess } from './userSlice';
import userSaga from './Sagas/userSaga';
import { useDispatch,useSelector } from 'react-redux';

const App = () => {

  const dispatch=useDispatch()
  const apidata=useSelector((state)=>state.user?.data)
  console.log("apidata",apidata)
  return (
    <div>App
      <button onClick={()=>dispatch(userRequest())}>Click</button>
    </div>
  )
}

export default App