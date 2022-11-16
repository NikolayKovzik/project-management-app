/* =============== using example ===============
 * const dispatch = useAppDispatch();
 * const todos = useAppSelector(state => state.todos.list);
 * const {isAuth} = useAppSelector(state => state.auth);
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import authSlice from './authSlice';
import fetchExampleSlice from './fetchSlice';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authSlice,
    fetch: fetchExampleSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
