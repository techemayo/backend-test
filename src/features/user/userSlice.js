import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userAPI";

const initialState = {
  user: "",
  staus: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.user = [...state.user, action.user];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(requestUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(requestUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      });
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
