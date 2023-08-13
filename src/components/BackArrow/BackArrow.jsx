import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import AnimatedIcon from "./../AnimatedIcon/AnimatedIcon";

import staticArrow from "./../../assets/staticLeftArrow.png";
import animatedArrow from "./../../assets/animatedLeftArrow.json";

function BackArrow() {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  return (
    <ArrowWrapper
      onMouseLeave={() => setIsAnimating(false)}
      onMouseEnter={() => setIsAnimating(true)}
      onClick={() => navigate(-1)}
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

const ArrowWrapper = styled.div`
  width: ${24 / 16}rem;
  height: ${24 / 16}rem;
  position: absolute;
  top: -2rem;
  left: 0;
  cursor: pointer;
`;
