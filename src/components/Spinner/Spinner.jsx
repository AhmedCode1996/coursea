import { styled } from "styled-components";
import Lottie from "lottie-react";

import animatedSpinner from "./../../assets/animatedSpinner.json";

import { TYPOGRAPHY, COLORS, FONT_FAMILY } from "./../../constants";

function Spinner() {
  return (
    <Wrapper>
      <Content>
        <Lottie animationData={animatedSpinner} loop={true} />
        <p>Loading courses....</p>
      </Content>
    </Wrapper>
  );
}

export default Spinner;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  inset: 0;
  background-color: ${COLORS.transparent.black10};
`;

const Content = styled.div`
  p {
    font-family: ${FONT_FAMILY.paytone};
    font-size: ${TYPOGRAPHY.xl2};
  }
`;
