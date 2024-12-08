import { createSlice } from "@reduxjs/toolkit";

const AuthSignUp = createSlice({
  name: "AuthSignUp",
  initialState: {
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
    confirmPassword: "",
  },
  reducers: {
    setFullName: (state, action) => {
      state.fullName = { ...state.fullName, ...action.payload };
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      const { password, confirmPassword } = action.payload;
      if (password !== undefined) {
        state.password = password;
      }
      if (confirmPassword !== undefined) {
        state.confirmPassword = confirmPassword;
      }
    },
    resetSignUpForm: (state) => {
      state.fullName.firstName = "";
      state.fullName.lastName = "";
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
    },
  },
});

export const { setFullName, setEmail, setPassword, resetSignUpForm } =
  AuthSignUp.actions;
export default AuthSignUp.reducer;
