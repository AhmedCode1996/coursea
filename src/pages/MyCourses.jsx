/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import BackArrow from "../components/BackArrow/BackArrow";
import { styled } from "styled-components";
import { COLORS } from "../constants";

import CourseSpinner from "./../components/CourseSpinner/CourseSpinner";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setLocation } from "../features/user/userSlice";

const MyCourses = () => {
  const { joinedCourses } = useSelector((state) => state.user);
  const { courses } = useSelector((state) => state.courseSlice);
  const data = useLocation();
  const dispatch = useDispatch();
  const location = data.pathname.split("/")[2];

  console.log(location);

  useEffect(() => {
    dispatch(setLocation(location));
  }, [location, dispatch]);
  /*
    In this code, the map function is used to iterate over
     each course ID in the courseIds array and for each ID,
     the find function is used to find the corresponding original course.
     The result of the map operation is an array of matched courses,
     including undefined for IDs that don't have a match.
     To remove the undefined values, the filter(Boolean)
     is used to filter out falsy values from the array.

  */
  const targetCourses = joinedCourses
    .map((courseId) => courses.find((course) => course.id === Number(courseId)))
    .filter(Boolean);

  if (!targetCourses.length) {
    return <CourseSpinner />;
  }
  return (
    <Wrapper>
      {targetCourses.map((course) => (
        <SingleCourse key={course.id} {...course} />
      ))}
    </Wrapper>
  );
};

export default MyCourses;

const Wrapper = styled.div`
  --gap: ${24 / 16}rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  justify-items: center;
  gap: var(--gap);
  background-color: ${COLORS.neutral.lightGrey};
  padding-block: 1rem;
  padding-inline: 0.5rem;
`;
