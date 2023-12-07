import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IArticle, IPostResponse } from "../../types";
import { BASE_URL, ARTICLE } from "../../constants";

// Define a type for the slice state
interface ApiState {
  loading: boolean;
  error: string;
  articles: IArticle[];
}

// Define the initial state using that type
const initialState: ApiState = {
  loading: false,
  error: "",
  articles: [],
};

export const apiSlice = createSlice({
  name: "api",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.loading = true;
      state.articles = [];
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.articles = payload.map((post) => post.acf);
      state.loading = true;
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      state.loading = false;
      state.articles = [];
      state.error = "Cannot load categories";
    });
  },
});

export const fetchArticles = createAsyncThunk<
  IPostResponse[],
  void,
  { rejectValue: unknown }
>("articles", async () => {
  const response = await fetch(`${BASE_URL}/posts?categories=${ARTICLE}`);
  const data = await response.json();
  return data;
});

//export const {  } = apiSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectArticles = (state: RootState) => state.api.articles;

export default apiSlice.reducer;
