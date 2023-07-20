import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./features/courseSlice";
export const store = configureStore({
  reducer: {
    courseSlice,
  },
});
