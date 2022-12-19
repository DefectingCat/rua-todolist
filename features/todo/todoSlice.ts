import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'app/store';

export interface SingleTodo {
  id: string;
  content: string;
  isDone: boolean;
}
// Define a type for the slice state
export interface TodoState {
  todos: SingleTodo[];
}

// Define the initial state using that type
const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // Dispatch "event" not "setter"
  reducers: {},
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
