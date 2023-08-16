/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { COLORS, TYPOGRAPHY } from "../../constants";
import FollowLink from "../FollowLink/FollowLink";
import fallingStar from "./../../assets/fallingStar.png";

function CourseMiniInformation({ courseInformation }) {
  return (
    <>
      <Title>{courseInformation.title}</Title>
      <MiniInfo>
        <InstructorInfo>
          <InstructorAvatar src={courseInformation.instructor_image} />
          <InstructorName>{courseInformation.instructor_name}</InstructorName>
          <InstructorJob>{courseInformation.instructor_job}</InstructorJob>
          <FollowLink course={courseInformation} />
        </InstructorInfo>
        <CourseRating>
          <span>
            <img src={fallingStar} />
          </span>
          <span>{courseInformation.rating.toFixed(1)}</span>
        </CourseRating>
      </MiniInfo>
    </>
  );
}

export default CourseMiniInformation;

const Title = styled.h2`
  color: ${COLORS.neutral.black};
  font-size: ${TYPOGRAPHY.xl2};
`;

const MiniInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${TYPOGRAPHY.sm};
  font-weight: normal;
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
const InstructorJob = styled.h3`
  color: ${COLORS.neutral.darkGrey};
  font-weight: normal;
`;

const CourseRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

  & span:first-child {
    width: ${30 / 16}rem;
  }

  & span:last-child {
    color: ${COLORS.neutral.black};
    font-weight: 600;
  }
`;
