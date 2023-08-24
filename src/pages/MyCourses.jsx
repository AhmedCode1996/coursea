/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import { styled } from "styled-components";
import { COLORS, FONT_FAMILY, TYPOGRAPHY } from "../constants";

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setLocation } from "../features/user/userSlice";

import followLinkIcon from "./../assets/followme.json";
import AnimatedIcon from "../components/AnimatedIcon/AnimatedIcon";
import AnimatedAvatar from "./../assets/notFoundAvatar.json";
const MyCourses = () => {
  const { joinedCourses } = useSelector((state) => state.user);
  const { courses } = useSelector((state) => state.courseSlice);
  const data = useLocation();
  const dispatch = useDispatch();
  const location = data.pathname.split("/")[2].replaceAll("-", " ");

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
    return (
      <EmptyWrapper>
        <h2 style={{ textTransform: "capitalize" }}>
          you haven't added any courses yet
        </h2>
        <AvatarWrapper>
          <AnimatedIcon icon={AnimatedAvatar} />
        </AvatarWrapper>
        <LinkWrapper to={"/account/explore-courses"}>
          <span>follow me to add</span>
          <IconWrapper>
            <AnimatedIcon icon={followLinkIcon} />
          </IconWrapper>
        </LinkWrapper>
      </EmptyWrapper>
    );
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

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  font-family: ${FONT_FAMILY.pilcrow};
`;

const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.neutral.black};
  font-size: ${TYPOGRAPHY.lg};
  font-weight: 600;
`;

const IconWrapper = styled.span`
  width: ${50 / 16}rem;
`;

const AvatarWrapper = styled.div`
  width: clamp(${250 / 16}rem, ${400 / 16}rem, ${600 / 16}rem);
`;

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
