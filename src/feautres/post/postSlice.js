import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Lorem, ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi earum nam maxime similique distinctio pariatur assumenda vero natus beatae autem!",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: false,
      wow: false,
      heart: false,
      rocket: false,
      coffee: false,
      sad: false,
    },
  },
  {
    id: "2",
    title: "Lorem, ipsum dolor",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi earum nam maxime similique distinctio pariatur assumenda vero natus beatae autem!",
    date: sub(new Date(), { minutes: 20 }).toISOString(),
    reactions: {
      thumbsUp: false,
      wow: false,
      heart: false,
      rocket: false,
      coffee: false,
      sad: false,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, username) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            username,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: false,
              wow: false,
              heart: false,
              rocket: false,
              coffee: false,
              sad: false,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction] = !existingPost.reactions[reaction];
      }
    },
  },
});

export const { postAdded, reactionAdded } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
