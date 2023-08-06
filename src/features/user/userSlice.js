import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../services/supabase";

const initialState = {
  email: "",
  password: "",
  username: "",
  userId: null,
  authenticated: false,
  loading: false,
  error: "",
  following: [],
  joinedCourses: []
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userCredentials) => {
    try {
      let { data, error } = await supabase.auth.signUp({
        email: userCredentials.email,
        password: userCredentials.password,
      });
      if (error) throw new Error("error");
      console.log(data);
      return data;
    } catch (error) {
      return error.message;
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
    setUsername: (state, { payload }) => {
      state.username = payload;
    },
    setFollow: (state, { payload }) => {
      state.following.push(payload);
      console.log(state.following);
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
      state.authenticated = payload.user.role === "authenticated";
    });
    builder.addCase(createUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { setEmail, setPassword, setUsername, setFollow } =
  userSlice.actions;
export default userSlice.reducer;
