/* eslint-disable no-unused-vars */
import SliderWrapper from "../SliderWrapper/SliderWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../features/courseSlice";
import Mentor from "../Mentor/Mentor";
import CourseSpinner from "./../CourseSpinner/CourseSpinner";
import { styled } from "styled-components";
import { COLORS } from "../../constants";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setLocation, setUnfollowingList } from "../../features/user/userSlice";

function Mentors() {
  const { courses } = useSelector(getAllCourses);
  const { following, unfollowing } = useSelector((state) => state.user);

  const data = useLocation();
  const dispatch = useDispatch();
  const location = data.pathname.split("/")[2];

  useEffect(() => {
    dispatch(setLocation(location));
  }, [location, dispatch]);

  useEffect(() => {
    const unfollowingMentors = courses.map((element) => {
      const {
        id,
        instructor_image: image,
        instructor_job: job,
        instructor_name: name,
      } = element;
      return {
        id,
        image,
        job,
        name,
      };
    });

    dispatch(setUnfollowingList(unfollowingMentors));
  }, [courses, dispatch]);
  if (!courses.length) return <CourseSpinner />;
  return (
    <>
      <Wrapper>
        {unfollowing.map((unfollowedElement, index) => {
          const { id, name, image, job } = unfollowedElement;
          return (
            <motion.div layoutId={id} key={index}>
              <Mentor id={id} image={image} job={job} name={name} />
            </motion.div>
          );
        })}
      </Wrapper>
      <FollowedMentors>
        <h2>Followed Mentors</h2>
        <Wrapper>
          {following.map((followedElement, index) => {
            const { id, name, image, job } = followedElement;
            return (
              <motion.div layoutId={id} key={index}>
                <Mentor id={id} image={image} job={job} name={name} />
              </motion.div>
            );
          })}
        </Wrapper>
      </FollowedMentors>
    </>
  );
}

export default Mentors;

const Wrapper = styled.div`
  --gap: ${24 / 16}rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
  justify-items: center;
  gap: var(--gap);
  background-color: ${COLORS.neutral.lightGrey};
  padding-block: 1rem;
  padding-inline: 0.5rem;
`;

const FollowedMentors = styled.div``;
