import { styled } from "styled-components";

import spinner from "./../../assets/courseLoader.json";

import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";

function CourseSpinner() {
  return (
    <LoadingItem>
      <AnimatedIcon icon={spinner} />
    </LoadingItem>
  );
}

export default CourseSpinner;

const LoadingItem = styled.span`
  display: block;
  width: ${300 / 16}rem;
  height: ${300 / 16}rem;
`;
