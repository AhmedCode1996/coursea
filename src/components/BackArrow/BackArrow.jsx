/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import AnimatedIcon from "./../AnimatedIcon/AnimatedIcon";

import staticArrow from "./../../assets/staticLeftArrow.png";
import animatedArrow from "./../../assets/animatedLeftArrow.json";
import { useSelector } from "react-redux";

function BackArrow() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { location } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <ArrowWrapper
      onMouseLeave={() => setIsAnimating(false)}
      onMouseEnter={() => setIsAnimating(true)}
      onClick={() => navigate("/account/overview")}
      disabled={location === "overview" ? true : false}
    >
      {isAnimating ? (
        <AnimatedIcon icon={animatedArrow} />
      ) : (
        <img src={staticArrow} />
      )}
    </ArrowWrapper>
  );
}

export default BackArrow;

const ArrowWrapper = styled.button`
  width: ${24 / 16}rem;
  height: ${24 / 16}rem;
  top: -2rem;
  cursor: pointer;
`;
