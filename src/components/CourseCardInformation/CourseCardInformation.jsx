/* eslint-disable react/prop-types */

import { styled } from "styled-components";

import { COLORS, TYPOGRAPHY } from "../../constants";

import star from "./../../assets/star.png";

function CourseCardInformation({ cardInformation }) {
  return (
    <>
      <CardTitle>{cardInformation.title}</CardTitle>
      <CardCourseInfo>
        <InstructorAvatar src={cardInformation.instructor_image} />
        <CardInstructorName>
          {cardInformation.instructor_name}
        </CardInstructorName>
        <CourseCardRating image={star}>
          {cardInformation.rating.toFixed(1)}
        </CourseCardRating>
      </CardCourseInfo>
    </>
  );
}

export default CourseCardInformation;

const Title = styled.h2`
  color: ${COLORS.neutral.black};
  font-size: ${TYPOGRAPHY.xl2};
`;

const CardTitle = styled(Title)`
  font-size: ${TYPOGRAPHY.lg};
`;

const CardCourseInfo = styled.div`
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
  font-weight: normal;
  margin-right: auto;
`;

const CardInstructorName = styled(InstructorName)`
  color: ${COLORS.neutral.darkGrey};
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

const CourseCardRating = styled(CourseDetailsSingleItem)`
  &::before {
    background-image: url(${(props) => props.image && props.image});
  }
`;
