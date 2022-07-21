import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAccount } from "../../service/userServices";

const createUser = createAsyncThunk(
  "users/createUser",
  async (username, password) => {
    const response = await createAccount(username, password);
    return response;
  }
);

const initialState = { loginStatus: false };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loginStatus = true;
    });
  },
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
export const { createUser } = userSlice.actions;
