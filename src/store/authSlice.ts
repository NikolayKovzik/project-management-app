import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  isAuth: boolean;
  counter: number;
};

const initialState: AuthState = {
  isAuth: false,
  counter: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthStatus(state, action: PayloadAction<boolean>) {
      // eslint-disable-next-line no-param-reassign
      state.isAuth = action.payload;
    },
    increment(state) {
      // eslint-disable-next-line no-param-reassign
      state.counter += 1;
    },
  },
});

export const { changeAuthStatus, increment } = authSlice.actions;

export default authSlice.reducer;
