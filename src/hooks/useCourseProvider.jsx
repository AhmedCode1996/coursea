import { useContext } from "react";
import { CourseContext } from "./CourseProvider";

export const useCourseContext = () => useContext(CourseContext);
