import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counter/counterAPI';

const initialState = {
  roomId: null,
  status: 'idle',
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },

  },

});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = state => state.app.roomId;


export default appSlice.reducer;
