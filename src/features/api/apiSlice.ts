import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import {
  AcfArticle,
  AcfOferta,
  AcfQuienes,
  AcfTimeline,
  IPageResponse,
  IPostResponse,
} from "../../types";
import { BASE_URL } from "../../constants";
import { PagesEnum, PostEnum } from "../../types/Enums";

// Define a type for the slice state
interface ApiState {
  loading: boolean;
  error: string;
  pages: {
    nuestra_oferta: AcfOferta | null;
    quienes_somos: AcfQuienes | null;
  };
  posts: {
    articles: AcfArticle[] | null;
    timeline: AcfTimeline[] | null;
  };
}

// Define the initial state using that type
const initialState: ApiState = {
  loading: false,
  error: "",
  pages: {
    nuestra_oferta: null,
    quienes_somos: null,
  },
  posts: {
    articles: null,
    timeline: null,
  },
};

export const apiSlice = createSlice({
  name: "api",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      const { post, data } = payload;
      if (post === PostEnum.ARTICLES) {
        const arts: any[] = data
          .map((post) => ({ id: post.id, date: post.date, ...post.acf }))
          .sort((a: any, b: any) => a.order - b.order);
        for (let i = 0; i < arts.length; i++) {
          arts[i] = {
            ...arts[i],
            next: arts[i + 1 < arts.length ? i + 1 : 0].id,
          };
        }
        state.posts[post] = arts;
      } else if (post === PostEnum.TIMELINE) {
        console.log(data);
        state.posts[post] = data
          .map((post) => ({
            ...post.acf,
          }))
          .sort((a: any, b: any) => a.order - b.order);
      }
      state.loading = true;
    });
    builder.addCase(fetchPosts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = "Cannot get post data";
    });
  },
});

export const fetchPage = createAsyncThunk<
  { data: IPageResponse; page: PagesEnum },
  { page: PagesEnum; slug: string },
  { rejectValue: unknown }
>("page", async ({ page, slug }) => {
  const response = await fetch(`${BASE_URL}/pages?slug=${slug}`);
  const data = await response.json();
  return { data: data[0], page };
});

export const fetchPosts = createAsyncThunk<
  { data: IPostResponse[]; post: PostEnum },
  { post: PostEnum; id: number },
  { rejectValue: unknown }
>("posts", async ({ post, id }) => {
  const response = await fetch(`${BASE_URL}/posts?categories=${id}`);
  const data = await response.json();
  return {
    data,
    post,
  };
});

//export const {  } = apiSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectArticle = (state: RootState, id: number) =>
  state.api.posts.articles!.find((art) => art.id === id);
export const selectPage = (state: RootState, page: PagesEnum) =>
  state.api.pages[page];
export const selectPosts = (state: RootState, post: PostEnum) =>
  state.api.posts[post];

export default apiSlice.reducer;
