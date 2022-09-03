import { createSlice } from "@reduxjs/toolkit";

const initialState = 0

const refreshSlice = createSlice({
  name:'refresh',
  initialState,
  reducers: {
    update: (state, action) => {
      state = action.payload
    }
  }
})

export const {update} = refreshSlice.actions;

export default refreshSlice.reducer;