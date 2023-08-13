import { styled } from "styled-components";
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";

import loaderIcon from "./../../assets/authSpinner.json";

function AuthSpinner() {
  return (
    <Wrapper>
      <AnimatedIcon icon={loaderIcon} />
    </Wrapper>
  );
}

export default AuthSpinner;

const Wrapper = styled.span`
  display: block;
  width: ${24 / 16}rem;
`;
