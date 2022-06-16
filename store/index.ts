import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./slices/app";
import globalReducer from "./slices/global";

export const store = configureStore({
  reducer: {
    app: appReducer,
    global: globalReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type TStoreState = ReturnType<typeof store.getState>;
