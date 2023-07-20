/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  queryFilter: "",
};
const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload }) => {
      state.courses = payload;
    },
    filter: (state, { payload }) => {
      state.queryFilter = payload.label.toLowerCase();
    },
  },
});

export const { setCourses, filter } = courseSlice.actions;

export default courseSlice.reducer;
