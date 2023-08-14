/* eslint-disable react/no-unescaped-entities */

// import { styled } from "styled-components";
import WelcomeHeader from "../components/WelcomeHeader/WelcomeHeader";
import SliderCourses from "../components/SliderCourses/SliderCourses";
import { styled } from "styled-components";
import SliderMentors from "../components/SliderMentors/SliderMentors";

const Overview = () => {
  return (
    <Wrapper>
      <WelcomeHeader />
      <SliderMentors />
      <SliderCourses />
    </Wrapper>
  );
};

export default Overview;

const Wrapper = styled.div`
  width: 100%;
`;
