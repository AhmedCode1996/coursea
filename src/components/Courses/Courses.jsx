/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import SingleCourse from "../SingleCourse/SingleCourse";
import Spinner from "../Spinner/Spinner";
import { COLORS } from "./../../constants";
import { useSelector } from "react-redux";
import { fetchCourses, getAllCourses } from "../../features/courseSlice";
// import { useCourseContext } from "../../hooks/useCourseProvider";
// import { useEffect } from "react";
// import { fetchApiCourses } from "../../features/productApiCall";

function Courses() {
  const { courses, loading } = useSelector(getAllCourses);

  // const [courses] = useCourseContext();
  // useEffect(() => {
  //   dispatch(fetchCourses());
  // }, [dispatch]);

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
