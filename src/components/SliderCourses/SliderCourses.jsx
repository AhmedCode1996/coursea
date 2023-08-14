/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import SingleCourse from "../SingleCourse/SingleCourse";
import { getAllCourses } from "../../features/courseSlice";
import Spinner from "../Spinner/Spinner";
import { useEffect, useRef, useState } from "react";
import { COLORS } from "../../constants";

import forwardButton from "./../../assets/forwardButton.json";
import AnimatedIcon from "./../AnimatedIcon/AnimatedIcon";

function SliderCourses() {
  const WrapperRef = useRef();
  const [width, setWidth] = useState(0);
  const [fullWidth, setFullWidth] = useState(0);
  const [animationToggle, setAnimationToggle] = useState(0);
  const { courses, loading } = useSelector(getAllCourses);

  const handlePrevAction = () => {
    if (width === 0) return;
    setWidth((prev) => prev - 350);
  };

  const handleNExtAction = () => {
    const WrapperFullWidth = WrapperRef.current.scrollWidth;
    setFullWidth(WrapperFullWidth);

    console.log(WrapperFullWidth, width);

    if (WrapperFullWidth < 1240) {
      return;
    }
    setWidth((prev) => prev + 350);
  };
  if (loading) return <Spinner />;
  return (
    <OuterWrapper ref={WrapperRef}>
      <ActionButtons>
        <PrevButton
          onMouseEnter={(e) => setAnimationToggle(e.target.id)}
          id="1"
          onClick={handlePrevAction}
        >
          {<AnimatedIcon icon={forwardButton} />}
        </PrevButton>
        <NextButton
          onClick={handleNExtAction}
          onMouseEnter={(e) => setAnimationToggle(e.target.id)}
          id="2"
        >
          <AnimatedIcon icon={forwardButton} />
        </NextButton>
      </ActionButtons>
      <InnerWrapper width={width}>
        {courses.map((element) => (
          <SingleCourse {...element} key={element.id} />
        ))}
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default SliderCourses;

const OuterWrapper = styled.div`
  width: 60rem;
  padding: 1rem;
  overflow: hidden;
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transform: translateX(${(props) => props.width && -props.width}px);
  transition: all 0.3s;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  margin-bottom: 1.5rem;
`;

const BaseButton = styled.button`
  width: ${40 / 16}rem;
  height: ${40 / 16}rem;
  border-radius: 50%;
  border: 2px solid ${COLORS.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  cursor: pointer;
`;
const PrevButton = styled(BaseButton)`
  transform: rotateY(180deg);
`;
const NextButton = styled(BaseButton)``;
