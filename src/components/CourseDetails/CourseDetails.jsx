/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { COLORS, TYPOGRAPHY } from "../../constants";

import clockIcon from "./../../assets/clock.png";
import userIcon from "./../../assets/user.png";
import documentIcon from "./../../assets/document.png";

function CourseDetails({ details }) {
  return (
    <DetailsWrapper>
      <Students image={userIcon}>{details.students} Student</Students>
      <Modules image={documentIcon}>{details.sections} Module</Modules>
      <Duration image={clockIcon}>{details.duration}</Duration>
    </DetailsWrapper>
  );
}

export default CourseDetails;

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

const DetailsWrapper = styled.div`
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
