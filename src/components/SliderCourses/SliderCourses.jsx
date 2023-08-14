/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import SliderWrapper from "../SliderWrapper/SliderWrapper";
import { getAllCourses } from "../../features/courseSlice";
import SingleCourse from "../SingleCourse/SingleCourse";
import CourseSpinner from "../CourseSpinner/CourseSpinner";

const SliderCourses = () => {
  const { courses, loading } = useSelector(getAllCourses);
  if (!courses.length) return <CourseSpinner />;
  return (
    <SliderWrapper>
      {courses.map((element) => (
        <SingleCourse {...element} key={element.id} />
      ))}
    </SliderWrapper>
  );
};

export default SliderCourses;
