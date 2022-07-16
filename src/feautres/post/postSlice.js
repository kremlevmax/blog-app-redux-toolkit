import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Lorem, ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi earum nam maxime similique distinctio pariatur assumenda vero natus beatae autem!",
  },
  {
    id: "2",
    title: "Lorem, ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi earum nam maxime similique distinctio pariatur assumenda vero natus beatae autem!",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { postAdded } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
