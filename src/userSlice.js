import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
    error: {}
  },
  reducers: {
    userRequest: (state) => {
      return { ...state, isLoading: true, data: [], error: {} };
    },
    userSuccess: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload
      };
    },
    userError: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload
      };
    },
}
});

export const {
  userRequest,
  userSuccess,
  userError
} = userSlice.actions;
export default userSlice.reducer;
