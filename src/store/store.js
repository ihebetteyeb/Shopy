import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./state/userSlice";
import userApiSlice from "./state/userApiSlice";
import itemApiSlice from "./state/itemApiSlice";
import orderApiSlice from "./state/orderApiSlice";

export const store = configureStore({
  reducer: {
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [itemApiSlice.reducerPath]: itemApiSlice.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
    auth: userSliceReducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([
      userApiSlice.middleware,
      itemApiSlice.middleware,
      orderApiSlice.middleware,
    ]),
});
