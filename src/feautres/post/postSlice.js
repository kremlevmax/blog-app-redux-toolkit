import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../service/firebaseConfig";

const initialState = [];

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (dispatch, getState) => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const result = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return result;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(id, title, content, email, mood, date) {
        return {
          payload: {
            id,
            title,
            content,
            email,
            mood,
            date,
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
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      return payload;
    },
  },
});

export const { postAdded, reactionAdded } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
