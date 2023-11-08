import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  playIndex: null,
  playList: [],
};

export const SongSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeSong: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.playIndex = action.payload;
    },
    changeSongToPlayList: (state, action) => {
      state.playList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeSong, changeSongToPlayList} = SongSlice.actions;

export default SongSlice.reducer;
