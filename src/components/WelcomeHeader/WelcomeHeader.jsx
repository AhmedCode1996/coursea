/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { COLORS, TYPOGRAPHY } from "./../../constants";

const WelcomeHeader = () => {
  const { username } = useSelector((state) => state.user);
  return (
    <Wrapper>
      <h2>hi, {username}</h2>
      <p>Let's learn something new today!</p>
    </Wrapper>
  );
};

export default WelcomeHeader;

const Wrapper = styled.div`
  h2 {
    font-size: ${TYPOGRAPHY.xl2};
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
  p {
    color: ${COLORS.neutral.darkGrey};
    font-size: ${TYPOGRAPHY.lg};
  }
`;
