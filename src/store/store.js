import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./state/userSlice";
import userApiSlice from "./state/userApiSlice";

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    auth: userSliceReducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([userApiSlice.middleware]),
});
