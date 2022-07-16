import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feautres/post/postSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
