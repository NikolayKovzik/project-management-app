import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// const dispatch = useAppDispatch();
// const todos = useAppSelector(state => state.todos.list);
