import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'app/store';

export interface Theme {
  mainColor: string;
}

const initialState: Theme = {
  mainColor: '#fff',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export const {} = themeSlice.actions;

export default themeSlice.reducer;
