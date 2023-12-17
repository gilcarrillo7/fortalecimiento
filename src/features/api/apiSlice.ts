import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { AcfOferta, IArticle, IPageResponse, IPostResponse } from "../../types";
import { BASE_URL, ARTICLE, OFERTA } from "../../constants";
import { PagesEnum } from "../../types/Enums";

// Define a type for the slice state
interface ApiState {
  loading: boolean;
  error: string;
  articles: IArticle[];
  pages: {
    oferta: AcfOferta | null;
  };
}

// Define the initial state using that type
const initialState: ApiState = {
  loading: false,
  error: "",
  articles: [],
  pages: {
    oferta: null,
  },
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
      const arts = payload
        .map((post) => ({ id: post.id, date: post.date, ...post.acf }))
        .sort((a, b) => a.order - b.order);
      for (let i = 0; i < arts.length; i++) {
        arts[i] = {
          ...arts[i],
          next: arts[i + 1 < arts.length ? i + 1 : 0].id,
        };
      }
      state.articles = arts;
      state.loading = true;
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      state.loading = false;
      state.articles = [];
      state.error = "Cannot load categories";
    });
    builder.addCase(fetchPage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPage.fulfilled, (state, { payload }) => {
      const { page, data } = payload;
      state.pages[page] = data.acf;
      state.loading = true;
    });
    builder.addCase(fetchPage.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = "Cannot get page data";
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

export const fetchPage = createAsyncThunk<
  { data: IPageResponse; page: PagesEnum },
  { page: PagesEnum; id: number },
  { rejectValue: unknown }
>("page", async ({ page, id }) => {
  const response = await fetch(`${BASE_URL}/pages?id=${id}`);
  const data = await response.json();
  return { data: data[0], page };
});

//export const {  } = apiSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectArticles = (state: RootState) => state.api.articles;
export const selectArticle = (state: RootState, id: number) =>
  state.api.articles.find((art) => art.id === id);
export const selectPage = (state: RootState, page: PagesEnum) =>
  state.api.pages[page];

export default apiSlice.reducer;
