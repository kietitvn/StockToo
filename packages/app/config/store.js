import {
  FLUSH, PAUSE,
  PERSIST, persistReducer, PURGE,
  REGISTER, REHYDRATE
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { api } from "./api";
import financialReportSlice from "../api/financialReport/financialReportSlice";

const persistConfig = {
  timeout: 1,
  key: "api",
  storage,
};

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  financialReport: financialReportSlice,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

setupListeners(store.dispatch);
