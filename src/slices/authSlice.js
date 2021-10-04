import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLoggedIn: false,
  role: null,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    loginFail: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.role = null;
    },
  },
});

export const { loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;
