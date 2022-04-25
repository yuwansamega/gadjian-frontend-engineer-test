import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  users: {},
}

const userSlice = createSlice({

  name:"users",
  initialState,
  reducers: {
    addUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const {addUsers} = userSlice.actions;
export const getAllUsers = (state) => state.users.users;
export default userSlice.reducer;