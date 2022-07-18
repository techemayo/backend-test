import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userAPI";

const initialState = {
  user: "",
  status: "idle",
};
export const requestUser = createAsyncThunk(
  'user/requestUser', 
async () => {
  try{
    return getUser();
  }catch(error){
    throw Error(error);
  }
}
)

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
      })
      .addCase(requestUser.rejected, (state, action) => {
        state.status = "idle";
        console.log(action.payload)
      });
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
