import {configureStore} from '@reduxjs/toolkit';
import SongReducer from './slices/SongSlice';

export const store = configureStore({
  reducer: {
    songs: SongReducer,
  },
});
