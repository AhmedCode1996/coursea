/* eslint-disable no-unused-vars */
import SliderWrapper from "../SliderWrapper/SliderWrapper";
import { useSelector } from "react-redux";
import { getAllCourses } from "../../features/courseSlice";
import Mentor from "../Mentor/Mentor";
import CourseSpinner from "./../CourseSpinner/CourseSpinner";

function SliderMentors() {
  const { courses, loading } = useSelector(getAllCourses);
  if (!courses.length) return <CourseSpinner />;
  return (
    <SliderWrapper>
      {courses.map((element) => {
        const { instructor_image, instructor_job, instructor_name, id } =
          element;
        return (
          <Mentor
            image={instructor_image}
            job={instructor_job}
            name={instructor_name}
            key={id}
          />
        );
      })}
    </SliderWrapper>
  );
}

export default SliderMentors;
