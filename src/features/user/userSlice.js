import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../services/supabase";

const initialState = {
  email: "",
  password: "",
  userId: null,
  authenticated: false,
  loading: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userCredentials) => {
    try {
      let { data } = await supabase.auth.signUp({
        email: userCredentials.email,
        password: userCredentials.password,
      });
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    setPassword: (state, { payload }) => {
      state.password = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userId = payload.user.id;
      state.email = payload.user.email;
      state.authenticated = payload.user.aud === "authenticated";
    });
    builder.addCase(createUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { setEmail, setPassword } = userSlice.actions;
export default userSlice.reducer;
