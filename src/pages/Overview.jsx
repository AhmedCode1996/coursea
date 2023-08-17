/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

// import { styled } from "styled-components";
import WelcomeHeader from "../components/WelcomeHeader/WelcomeHeader";
import SliderCourses from "../components/SliderCourses/SliderCourses";
import { styled } from "styled-components";
import SliderMentors from "../components/SliderMentors/SliderMentors";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLocation } from "../features/user/userSlice";

const Overview = () => {
  const data = useLocation();
  const dispatch = useDispatch();
  const location = data.pathname.split("/")[2];

  useEffect(() => {
    dispatch(setLocation(location));
  }, [location, dispatch]);
  return (
    <Wrapper>
      <WelcomeHeader />
      <SliderMentors title="mentors" />
      <SliderCourses title="courses" />
    </Wrapper>
  );
};

export default Overview;

const Wrapper = styled.div`
  /* min-width: 100%; */
`;
