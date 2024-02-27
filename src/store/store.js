import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./state/userSlice";

export const store = configureStore({
  reducer: {
    auth: userSliceReducer,
  },
});
