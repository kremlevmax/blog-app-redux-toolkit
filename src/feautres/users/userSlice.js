import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: false,
  email: "",
  loading: true,
  error: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoginStatus: (state, action) => {
      state.loginStatus = action.payload.loginStatus;
      state.email = action.payload.email;
      state.loading = action.payload.loading;
    },
  },
});

export const selectAllUsers = (state) => state.users;
export const { setLoginStatus } = userSlice.actions;

export default userSlice.reducer;
