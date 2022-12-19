import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'app/store';

export interface Theme {
  mainColor: string;
  header: {
    color: string;
  };
}

const initialState: Theme = {
  //
  mainColor: '#fff',

  //  Header title
  header: {
    color: '#6a6a6a',
  },
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMainColor(state, action: PayloadAction<string>) {
      state.mainColor = action.payload;
    },
    changeHeader(state, action: PayloadAction<Partial<Theme['header']>>) {
      state.header = {
        ...state.header,
        ...action.payload,
      };
    },
  },
});

export const { changeMainColor, changeHeader } = themeSlice.actions;

// Selectors
export const selectMainColor = (state: RootState) => state.theme.mainColor;
export const selectHeader = (state: RootState) => state.theme.header;

export default themeSlice.reducer;
