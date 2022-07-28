import { createSlice } from "@reduxjs/toolkit";

// export const createUser = createAsyncThunk(
//   "users/createUser",
//   async ({ username, password }) => {
//     const result = await createAccount(username, password);
//     console.log(result.user);
//   }
// );

const initialState = { loginStatus: false, username: "" };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.loginStatus = action.payload.loginStatus;
      state.username = action.payload.username;
    },
  },
});

export const selectAllUsers = (state) => state.users;
export const { setLoginStatus } = userSlice.actions;

export default userSlice.reducer;
