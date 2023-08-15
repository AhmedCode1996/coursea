/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { COLORS, TYPOGRAPHY } from "./../../constants";
import { useState } from "react";

import animatedWelcome from "./../../assets/animatedWelcome.json";
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";
import { motion } from "framer-motion";

const WelcomeHeader = () => {
  const [welcome, setWelcome] = useState(false);
  const { username } = useSelector((state) => state.user);
  return (
    <Wrapper>
      {welcome && (
        <WelcomeWrapper as={motion.div}>
          <AnimatedIcon icon={animatedWelcome} />
        </WelcomeWrapper>
      )}
      <h2>
        hi,{" "}
        <span
          onMouseEnter={() => setWelcome(true)}
          onMouseLeave={() => setWelcome(false)}
        >
          {username}
        </span>
      </h2>
      <p>Let's learn something new today!</p>
    </Wrapper>
  );
};

export default WelcomeHeader;

const Wrapper = styled.div`
  position: relative;
  h2 {
    font-size: ${TYPOGRAPHY.xl2};
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    width: fit-content;

    span {
      background: rgb(0, 20, 36);
      background: linear-gradient(
        14deg,
        rgba(0, 20, 36, 1) 0%,
        rgba(9, 85, 121, 1) 70%,
        rgba(0, 212, 255, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  p {
    color: ${COLORS.neutral.darkGrey};
    font-size: ${TYPOGRAPHY.lg};
  }
`;
const WelcomeWrapper = styled.div`
  position: absolute;
  top: -100%;
  left: 20%;
  max-width: ${170 / 16}rem;
`;
