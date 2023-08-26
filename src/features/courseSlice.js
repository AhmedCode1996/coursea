/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../services/supabase";

const initialState = {
  loading: false,
  originalCourses: [],
  courses: [],
  error: null,
  searchFilter: "",
  levelFilterState: "Level",
  categoryFilterState: "Category",
  sortFilterState: "Sort By",
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      const { data: courses } = await supabase.from("courses").select("*");
      return courses;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    searchFilter: (state, { payload }) => {
      const searchValue = payload.toLowerCase();
      state.courses = state.originalCourses;
      state.courses = state.courses.filter((course) => {
        const titleValue = course.title.toLowerCase();
        return titleValue.includes(searchValue);
      });
    },
    levelFilter: (state, { payload }) => {
      let value = payload.label.toLowerCase();
      state.levelFilterState = value;
      if (value === "level") return;

      state.courses = state.originalCourses;
      state.courses = state.courses.filter((course) => course.level === value);
      state.categoryFilterState = "category";
      state.sortFilterState = "Sort By";
      console.log(state.categoryFilterState);
    },
    categoryFilter: (state, { payload }) => {
      let value = payload.label.toLowerCase();
      state.categoryFilterState = value;
      if (value === "all categories" || value === "category") {
        return;
      }

      state.courses = state.originalCourses;
      state.courses = state.courses.filter(
        (course) => course.category === value
      );
      state.levelFilterState = "Level";
      state.sortFilterState = "Sort By";
    },
    sortFilter: (state, { payload }) => {
      let value = payload.label.toLowerCase();
      state.sortFilterState = value;
      state.courses = state.originalCourses;
      if (value === "popular") {
        state.courses.sort((a, b) => b.students - a.students);
        state.levelFilterState = "Level";
        state.categoryFilterState = "Category";
      }
      if (value === "rating") {
        state.courses.sort((a, b) => b.rating - a.rating);
        state.levelFilterState = "Level";
        state.categoryFilterState = "Category";
      }
      if (value === "title: a-to-z") {
        state.courses.sort((a, b) => a.title.localeCompare(b.title));
        state.levelFilterState = "Level";
        state.categoryFilterState = "Category";
      }
      if (value === "title: z-to-a") {
        state.courses.sort((a, b) => b.title.localeCompare(a.title));
        state.levelFilterState = "Level";
        state.categoryFilterState = "Category";
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCourses.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.courses = payload;
      state.originalCourses = payload;
    });
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { levelFilter, sortFilter, categoryFilter, searchFilter } =
  courseSlice.actions;

export default courseSlice.reducer;

export const getAllCourses = (state) => state.courseSlice;
