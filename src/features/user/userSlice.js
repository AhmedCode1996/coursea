/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../services/supabase";

const initialState = {
  emailaddress: "",
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
  toastify: false,
  toastVariant: "",
  toastMessage: "",
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userCredentials) => {
    try {
      let { data, error } = await supabase.auth.signUp({
        email: userCredentials.email,
        password: userCredentials.password,
        options: {
          data: {
            username: userCredentials.username,
          },
        },
      });

      if (!error) {
        return data;
      } else {
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, { payload }) => {
      state.username = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
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
    toggleToastify: (state) => {
      state.toastify = false;
    },
    enableToastify: (state, { payload }) => {
      state.toastify = true;
      state.message = payload.message;
      state.toastVariant = payload.variant;
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
      state.toastify = true;
      state.toastVariant = "notice";
      state.toastMessage = "creating your account...";
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.toastify = true;
      state.toastVariant = "success";
      state.toastMessage = "congratulations for creating account";
      state.userId = payload.user.id;
      state.authenticated = payload.user.role === "authenticated";
    });
    builder.addCase(createUser.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
      state.toastify = true;
      state.toastVariant = "error";
      state.toastMessage = state.error;
    });
  },
});

export const {
  setUsername,
  setError,
  setAvatar,
  setFollow,
  setPlan,
  setLogout,
  toggleToastify,
  enableToastify,
  setLocation,
  setUnfollowingList,
  joinCourse,
  setToggleSidebar,
} = userSlice.actions;
export default userSlice.reducer;
