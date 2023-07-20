/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  inputFilter: "",
  searchFilter: "",
  loading: true,
  originalCourses: [],
};
const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload }) => {
      state.courses = payload;
      state.originalCourses = payload;
      state.loading = false;
    },
    filter: (state, { payload }) => {
      let value = payload.label.toLowerCase();
      if (
        value === "all categories" ||
        value === "category" ||
        value === "level"
      )
        return;

      state.courses = state.originalCourses;
      state.inputFilter = value;
      state.courses = state.courses.filter(
        (course) => course.level === value || course.category === value
      );
    },
  },
});

export const { setCourses, filter, resetFilter } = courseSlice.actions;

export default courseSlice.reducer;
