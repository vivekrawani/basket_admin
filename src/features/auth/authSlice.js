import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { googleSignIn } from "../../firebase";

const initialState = {
  user: null,
  loading: false,
};

const gLogin = createAsyncThunk("/user/login", async () => {
  try {
    const user = await googleSignIn();
    return user;
  } catch (error) {
    throw new Error(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(gLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(gLogin.rejected, (state, action) => {
      state.loading = false;
      console.log(action.error.message);
    });
  },
});
export { gLogin };
export default authSlice.reducer;
