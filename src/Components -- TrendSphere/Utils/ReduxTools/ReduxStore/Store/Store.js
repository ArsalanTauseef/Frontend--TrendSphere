import { configureStore } from "@reduxjs/toolkit";
import AuthSignUp from "../../ReduxNexus/Authentications/AuthSignUp"
import ReduxNavActive from "../../ReduxNexus/ReduxNavActive/ReduxNavActive";
export const store = configureStore({
  reducer: {
    ReduxNavActive,
    AuthSignUp,
  },
});

export default store