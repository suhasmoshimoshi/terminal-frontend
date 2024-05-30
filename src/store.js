// store.js
import { configureStore } from '@reduxjs/toolkit';
import savedMarkdownReducer from './reducers/savedMarkdownSlice';

export default configureStore({
  reducer: {
    savedMarkdown: savedMarkdownReducer,
  },
});
