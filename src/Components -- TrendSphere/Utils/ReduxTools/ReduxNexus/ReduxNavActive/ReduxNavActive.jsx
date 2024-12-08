import { createSlice } from "@reduxjs/toolkit";

const ReduxNavActive = createSlice({
  name: "NavActive",
  initialState: {
    IsClicked: -1,
  },
  reducers: {
    setIsClicked: (state, action) => {
      state.IsClicked = action.payload;
    },
  },
});

export const { setIsClicked } = ReduxNavActive.actions;

export default ReduxNavActive.reducer;
