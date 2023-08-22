import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../services/supabase";

const initialState = {
  email: "",
  password: "",
  username: "",
  avatar: "",
  userId: null,
  authenticated: false,
  loading: false,
  error: "",
  following: [],
  unfollowing: [],
  joinedCourses: [],
  completedCourse: [],
  plan: "free",
  location: "",
  toggleSidebar: false,
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
    setAvatar: (state, { payload }) => {
      state.avatar = payload;
    },
    setFollow: (state, { payload }) => {
      state.following.push(payload);
      state.unfollowing = state.unfollowing.filter(
        (element) => element.id !== payload.id
      );
    },
    setPlan: (state, { payload }) => {
      state.plan = payload;
    },
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
    setUnfollowingList: (state, { payload }) => {
      state.unfollowing = payload;
    },
    clearFollowing: (state) => {
      state.following = [];
    },
    setLogout: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
      state.avatar = "";
      state.authenticated = false;
      state.following = [];
      state.joinedCourses = [];
    },
    joinCourse: (state, { payload }) => {
      if (state.joinedCourses.includes(payload)) return;
      state.joinedCourses.push(payload);
    },
    setToggleSidebar: (state, { payload }) => {
      state.toggleSidebar = payload;
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

export const {
  setEmail,
  setPassword,
  setUsername,
  setAvatar,
  setFollow,
  setPlan,
  setLogout,
  setLocation,
  setUnfollowingList,
  joinCourse,
  setToggleSidebar,
} = userSlice.actions;
export default userSlice.reducer;
