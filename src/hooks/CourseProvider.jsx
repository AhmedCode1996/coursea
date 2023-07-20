/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { mappedCourses } from "../data/filteredCourses";
import { createContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [courseData, setCourseData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      //selecting all rows
      const { data: courses, error } = await supabase
        .from("courses")
        .select("*");
      if (error) setError(error);
      setCourseData(courses);

      /*
      // // Insert Rows
      const { data, error } = await supabase
        .from("courses")
        .insert(mappedCourses)
        .select();
      */
      /*
      //delete all rows
      const { error } = await supabase
        .from("courses")
        .delete()
        .eq("is_paid", false);
        */
    };
    getData();
  }, []);

  return (
    <CourseContext.Provider value={[courseData, setCourseData, error]}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
