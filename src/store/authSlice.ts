import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  isAuth: boolean;
};

const initialState: AuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthStatus(state, action: PayloadAction<boolean>) {
      // eslint-disable-next-line no-param-reassign
      state.isAuth = action.payload;
    },
  },
});

export const { changeAuthStatus } = authSlice.actions;

export default authSlice.reducer;
