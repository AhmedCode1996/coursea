/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

import { COLORS, TYPOGRAPHY } from "../../constants";

import clock from "./../../assets/clock.png";
import user from "./../../assets/user.png";
import document from "./../../assets/document.png";
import star from "./../../assets/star.png";

function SingleCourse(props) {
  const {
    id,
    title,
    rating,
    duration,
    sections,
    students,
    course_headline,
    course_image,
    instructor_name,
    instructor_image,
  } = props;
  return (
    <CourseWrapper>
      <CourseImage>
        <CourseAvatar src={course_image} title={title} />
        <span></span>
      </CourseImage>
      <CourseTotalInformation>
        <CourseHeadline>{title}</CourseHeadline>
        <CourseInfo>
          <InstructorAvatar src={instructor_image} title={instructor_name} />
          <InstructorName>{instructor_name}</InstructorName>
          <CourseRating image={star}>{rating}</CourseRating>
        </CourseInfo>
        <CourseDetails>
          <Students image={user}>{students} Student</Students>
          <Modules image={document}>{sections} Module</Modules>
          <Duration image={clock}>{duration}</Duration>
        </CourseDetails>
      </CourseTotalInformation>
    </CourseWrapper>
  );
}

export default SingleCourse;

const CourseWrapper = styled.div`
  --padding: ${20 / 16}rem;
  --vertical-gap: ${20 / 16}rem;
  display: flex;
  flex-direction: column;
  gap: var(--vertical-gap);
  padding: var(--padding);
  border-radius: 1rem;
  max-width: 350px;
  background-color: ${COLORS.neutral.white};
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    transform: translate(2px, 2px) scale(1.01);
  }
  &:active {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(4px) scale(1);
  }
`;
const CourseImage = styled.div``;

const CourseAvatar = styled.img`
  --border-radius: ${10 / 16}rem;
  border-radius: var(--border-radius);
`;
const CourseTotalInformation = styled.div`
  --vertical-gap: ${10 / 8}rem;
  display: flex;
  flex-direction: column;
  gap: var(--vertical-gap);
`;
const CourseHeadline = styled.h2`
  font-size: ${TYPOGRAPHY.lg};
  font-weight: 600;
`;
const CourseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${10 / 16}rem;
`;
const InstructorAvatar = styled.img`
  max-width: ${30 / 16}rem;
  max-height: ${30 / 16}rem;
  border-radius: 50%;
`;
const InstructorName = styled.h3`
  font-size: ${TYPOGRAPHY.base};
  color: ${COLORS.neutral.darkGrey};
  margin-right: auto;
  font-weight: 400;
`;

const CourseDetailsSingleItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${COLORS.neutral.black};
  font-size: ${TYPOGRAPHY.base};
  font-weight: 500;

  &::before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
  }
`;

const CourseRating = styled(CourseDetailsSingleItem)`
  &::before {
    background-image: url(${(props) => props.image && props.image});
  }
`;
const CourseDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Students = styled(CourseDetailsSingleItem)`
  &::before {
    background-image: url(${(props) => props.image && props.image});
  }
`;
const Modules = styled(CourseDetailsSingleItem)`
  &::before {
    background-image: url(${(props) => props.image && props.image});
  }
`;
const Duration = styled(CourseDetailsSingleItem)`
  &::before {
    background-image: url(${(props) => props.image && props.image});
  }
`;
