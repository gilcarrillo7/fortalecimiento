import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface UiState {
	loading: boolean;
	menuOpen: boolean;
}

// Define the initial state using that type
const initialState: UiState = {
	loading: false,
	menuOpen: false,
};

export const uiSlice = createSlice({
	name: "ui",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setMenuOpen: (state, { payload }) => {
			state.menuOpen = payload;
		},
	},
});

export const { setMenuOpen } = uiSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLoading = (state: RootState) => state.ui.loading;
export const selectMenuOpen = (state: RootState) => state.ui.menuOpen;

export default uiSlice.reducer;
