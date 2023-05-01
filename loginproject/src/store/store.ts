import { configureStore } from "@reduxjs/toolkit";
import sessionStorage from "redux-persist/lib/storage/session";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux"; // updated import statement
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "../reducers/loginSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["login"],
};

const rootReducer = combineReducers({
  login: loginSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

export default store;
