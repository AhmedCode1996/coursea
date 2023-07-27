import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./features/courseSlice";
import userSlice from "./features/user/userSlice";
export const store = configureStore({
  reducer: {
    courseSlice,
    user: userSlice,
  },
});
