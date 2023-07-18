/* eslint-disable react/prop-types */
import { styled } from "styled-components";

import LoginPicture from "./../../assets/login.jpg";
import { COLORS, TYPOGRAPHY } from "../../constants";
import Logo from "../Logo/Logo";
function AuthenticationPicture() {
  return (
    <Wrapper>
      <Overlay />
      <Content>
        <Logo color="white" />
        <h2>
          improve your skill with <strong>Coursea!</strong>
        </h2>
        <p>
          island her soldier taken syllable full represent through basket
          balloon up western dirt open program rod shells nor ability smile
          compare paid sitting iron
        </p>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-image: url(${LoginPicture});
  background-size: cover;
  background-position: 30%;
  background-repeat: no-repeat;
  padding: 4rem;
  min-height: 100dvh;
  display: flex;
  position: relative;
`;
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    ${COLORS.transparent.black10},
    ${COLORS.transparent.black100}
  );
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 25px;
  color: ${COLORS.neutral.white};
  position: relative;
  z-index: 100;
  font-weight: 400;
  line-height: 1.5;
  h2 {
    font-weight: inherit;
    font-size: ${TYPOGRAPHY.xl2};

    strong {
      display: block;
      font-weight: 500;
    }
  }
  p {
    font-size: ${TYPOGRAPHY.sm};
    max-width: 80%;
  }
`;
export default AuthenticationPicture;
