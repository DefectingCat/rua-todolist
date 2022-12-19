import { configureStore } from '@reduxjs/toolkit';
import todoReducer from 'features/todo/todoSlice';
import themeReducer from 'features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
