/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import SingleCourse from "../SingleCourse/SingleCourse";
import { useCourseContext } from "../../hooks/useCourseProvider";
import Spinner from "../Spinner/Spinner";
import { COLORS } from "./../../constants";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { fetchApiCourses } from "../../features/productApiCall";
import { fetchCourses } from "../../features/courseSlice";

function Courses() {
  // const [courses] = useCourseContext();
  const dispatch = useDispatch();
  const { courses, loading, inputFilter } = useSelector(
    (state) => state.courseSlice
  );

  useEffect(() => {
    dispatch(fetchCourses());
  }, [ dispatch]);

  if (loading) return <Spinner />;
  return (
    <Wrapper>
      {courses.map((element) => (
        <SingleCourse key={element.id} {...element} />
      ))}
    </Wrapper>
  );
}

export default Courses;

const Wrapper = styled.div`
  --gap: ${24 / 16}rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  justify-items: center;
  gap: var(--gap);
  background-color: ${COLORS.neutral.lightGrey};
  padding-block: 1rem;
  padding-inline: 0.5rem;
`;
