import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import cartSlice from "./slices/cartSlice";
import bookStoreSlice from "./slices/bookStoreSlice";
import authSlice from "./slices/authSlice";

const persistConfig = {
  key: "counter",
  storage,
};
const reducers = combineReducers({
  cart: cartSlice,
  bookStore: bookStoreSlice,
  auth: authSlice,
});
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
