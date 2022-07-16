import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "George Washington" },
  { id: "1", name: "Albert Einstein" },
  { id: "2", name: "Alan Turing" },
];

const userSlice = createSlice({ name: "users", initialState, reducers: {} });

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
