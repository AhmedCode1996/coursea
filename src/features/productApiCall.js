/* eslint-disable no-unused-vars */
import { supabase } from "./../services/supabase";
import { setCourses } from "./courseSlice";

export function fetchApiCourses() {
  return async (dispatch) => {
    try {
      const { data: courses, error } = await supabase
        .from("courses")
        .select("*");
      dispatch(setCourses(courses));
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
