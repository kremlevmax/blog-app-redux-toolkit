import { createSlice } from "@reduxjs/toolkit";

const initialState = { loginStatus: false, username: "", loading: true };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.loginStatus = action.payload.loginStatus;
      state.username = action.payload.username;
      state.loading = action.payload.loading;
    },
  },
});

export const selectAllUsers = (state) => state.users;
export const { setLoginStatus } = userSlice.actions;

export default userSlice.reducer;
