import { createSlice } from "@reduxjs/toolkit";

const AuthState = createSlice({
  name: "AuthState",
  initialState: {
    IsLoggedIn: false,
  },
  reducers: {
    setIsClicked: (state, action) => {
      state.IsLoggedIn = action.payload;
    },
  },
});

export const { IsLoggedIn } = AuthState.actions;

export default AuthState.reducer;
