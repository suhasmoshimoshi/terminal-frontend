// reducers/savedMarkdownSlice.js
import { createSlice } from '@reduxjs/toolkit';

let nextId = 0;

export const savedMarkdownSlice = createSlice({
  name: 'savedMarkdown',
  initialState: {
    entries: [],
  },
  reducers: {
    addMarkdown: (state, action) => {
      state.entries.push({ id: nextId++, content: action.payload });
    },
    removeMarkdown: (state, action) => {
      state.entries = state.entries.filter(entry => entry.id !== action.payload);
    },
  },
});

export const { addMarkdown, removeMarkdown } = savedMarkdownSlice.actions;

export default savedMarkdownSlice.reducer;
