import {
	configureStore,
	combineReducers,
	Action,
} from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import uiReducer from "./features/ui/uiSlice";

const rootReducer = combineReducers({
	ui: uiReducer,
});
// const middleware: Middleware<void, CombinedState<any>> =
// 	({ getState, dispatch }) =>
// 	(next) =>
// 	(action) => {
// 	};

const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(
	// 		middleware as unknown as ReturnType<typeof getDefaultMiddleware>
	// 	),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Thunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
