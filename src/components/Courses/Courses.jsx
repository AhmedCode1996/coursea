/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import SingleCourse from "../SingleCourse/SingleCourse";
import { useCourseContext } from "../../hooks/useCourseProvider";
import Spinner from "../Spinner/Spinner";
import { COLORS } from "./../../constants";

function Courses() {
  const [courses] = useCourseContext();

  if (!courses.length) return <Spinner />;

  return (
    <Wrapper>
      {courses.slice(0, 6).map((element) => (
        <SingleCourse key={element.id} {...element} />
      ))}
    </Wrapper>
  );
}

export default Courses;

const Wrapper = styled.div`
  --gap: ${24 / 16}rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  gap: var(--gap);
  background-color: ${COLORS.neutral.lightGrey};
  padding-block: 1rem;
  padding-inline: 0.5rem;
`;
