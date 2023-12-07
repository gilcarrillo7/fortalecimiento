import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import uiReducer from "./features/ui/uiSlice";
import apiReducer from "./features/api/apiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    api: apiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
