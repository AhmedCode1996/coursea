/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import SingleCourse from "../SingleCourse/SingleCourse";
import Spinner from "../Spinner/Spinner";
import { COLORS } from "./../../constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses, getAllCourses } from "../../features/courseSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setLocation } from "../../features/user/userSlice";
// import { useCourseContext } from "../../hooks/useCourseProvider";
// import { useEffect } from "react";
// import { fetchApiCourses } from "../../features/productApiCall";

function Courses() {
  const data = useLocation();
  const dispatch = useDispatch();
  const location = data.pathname.split("/")[2];

  useEffect(() => {
    dispatch(setLocation(location));
  }, [location, dispatch]);

  const { courses, loading } = useSelector(getAllCourses);

  // const [courses] = useCourseContext();
  // useEffect(() => {
  //   dispatch(fetchCourses());
  // }, [dispatch]);

  if (loading) return <Spinner />;

  return (
    <Wrapper>
      {courses.map((element, index) => (
        <SingleCourse index={index} key={element.id} {...element} />
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
