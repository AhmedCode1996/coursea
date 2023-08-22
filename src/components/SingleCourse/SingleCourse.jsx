/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { COLORS, TYPOGRAPHY } from "../../constants";

import clock from "./../../assets/clock.png";
import user from "./../../assets/user.png";
import document from "./../../assets/document.png";
import star from "./../../assets/star.png";
import beginnerRange from "./../../assets/beginnerRange.png";
import intermediateRange from "./../../assets/intermediateRange.png";
import masterRange from "./../../assets/masterRange.png";
import { motion } from "framer-motion";
import { formatModuleTime } from "../../utils/displayFormattedTime";
import { useSelector } from "react-redux";

function SingleCourse(props) {
  const { location } = useSelector((state) => state.user);

  const {
    id,
    index,
    category,
    level,
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

  let levelImage;
  if (level === "beginner") levelImage = beginnerRange;
  if (level === "intermediate") levelImage = intermediateRange;
  if (level === "master") levelImage = masterRange;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
      }}
    >
      <CourseWrapper location={location} to={`/account/${id}`}>
        <CourseImage>
          <CourseAvatar src={course_image} title={title} />
          <Level>
            <span> {level}</span>
            <img src={levelImage} />
          </Level>
        </CourseImage>
        <CourseTotalInformation>
          <CourseHeadline>{title.substring(0, 20)}</CourseHeadline>
          <CourseInfo>
            <InstructorAvatar src={instructor_image} title={instructor_name} />
            <InstructorName>{instructor_name.substring(0, 10)}</InstructorName>
            <CourseRating image={star}>{rating.toFixed(1)}</CourseRating>
          </CourseInfo>
          {location === "overview" || (
            <CourseDetails>
              <Students image={user}>{students} Student</Students>
              <Modules image={document}>{sections} Module</Modules>
              <Duration image={clock}>{formatModuleTime(duration)}</Duration>
            </CourseDetails>
          )}
        </CourseTotalInformation>
      </CourseWrapper>
    </motion.div>
  );
}

export default SingleCourse;

const CourseWrapper = styled(Link)`
  --padding: ${20 / 16}rem;
  --vertical-gap: ${20 / 16}rem;
  display: flex;
  flex-direction: column;
  min-width: ${(props) => props.location && 250}px;
  gap: var(--vertical-gap);
  padding: var(--padding);
  border-radius: 1rem;
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
const CourseImage = styled.div`
  position: relative;
`;

const Level = styled.div`
  --horizontal-padding: ${10 / 16}rem;
  --vertival-padding: ${6 / 16}rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  bottom: 5%;
  left: 5%;
  background-color: ${COLORS.neutral.white};
  border-radius: 0.5rem;
  padding: var(--vertival-padding) var(--horizontal-padding);
  box-shadow: 0 0 5px -2px rgba(0, 0, 0, 1);

  span {
    color: ${COLORS.neutral.black};
    font-weight: 500;
  }

  img {
    max-width: ${13 / 16}rem;
    max-height: ${12 / 16}rem;
  }
`;

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
  font-weight: bold;
  font-size: ${TYPOGRAPHY.sm};
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
