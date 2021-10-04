import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  acc: null,
  isLoggedIn: false,
  role: null,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.acc = action.payload.acc;
      state.isLoggedIn = true;
      state.role = action.payload.role;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.acc = null;
      state.isLoggedIn = false;
      state.role = null;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;
