/* eslint-disable no-unused-vars */
import SliderWrapper from "../SliderWrapper/SliderWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../features/courseSlice";
import Mentor from "../Mentor/Mentor";
import CourseSpinner from "./../CourseSpinner/CourseSpinner";
import { styled } from "styled-components";
import { COLORS } from "../../constants";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setLocation } from "../../features/user/userSlice";

function Mentors() {
  const data = useLocation();
  const dispatch = useDispatch();
  const location = data.pathname.split("/")[2];

  useEffect(() => {
    dispatch(setLocation(location));
  }, [location, dispatch]);
  const { courses, loading } = useSelector(getAllCourses);
  if (!courses.length) return <CourseSpinner />;
  return (
    <Wrapper>
      {courses.map((element, index) => {
        const { instructor_image, instructor_job, instructor_name, id } =
          element;
        return (
          <Mentor
            image={instructor_image}
            job={instructor_job}
            name={instructor_name}
            key={id}
            id={index}
          />
        );
      })}
    </Wrapper>
  );
}

export default Mentors;

const Wrapper = styled.div`
  --gap: ${24 / 16}rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
  justify-items: center;
  gap: var(--gap);
  background-color: ${COLORS.neutral.lightGrey};
  padding-block: 1rem;
  padding-inline: 0.5rem;
`;
