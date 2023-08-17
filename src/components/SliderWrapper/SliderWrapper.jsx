/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import { useRef, useState } from "react";
import { COLORS } from "../../constants";

import forwardButton from "../../assets/forwardButton.json";
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";
import { motion } from "framer-motion";

function SliderWrapper({ title, children }) {
  const WrapperRef = useRef();
  const [width, setWidth] = useState(0);
  const [fullWidth, setFullWidth] = useState(0);

  const handlePrevAction = () => {
    if (width === 0) return;
    setWidth((prev) => prev - 350);
  };

  const handleNExtAction = () => {
    const WrapperFullWidth = WrapperRef.current.scrollWidth;
    setFullWidth(WrapperFullWidth);

    if (WrapperFullWidth < 1240) {
      return;
    }
    setWidth((prev) => prev + 350);
  };
  return (
    <OuterWrapper ref={WrapperRef}>
      <HeadingAndActionWrapper>
        <SliderTitle>monthly {title}</SliderTitle>
        <ActionButtons>
          <PrevButton onClick={handlePrevAction}>
            {<AnimatedIcon icon={forwardButton} />}
          </PrevButton>
          <NextButton onClick={handleNExtAction}>
            <AnimatedIcon icon={forwardButton} />
          </NextButton>
        </ActionButtons>
      </HeadingAndActionWrapper>
      <InnerWrapper
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
        animate={{ x: -width }}
        as={motion.div}
        width={width}
      >
        {children}
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default SliderWrapper;

const OuterWrapper = styled.div`
  padding: 1rem;
  overflow: hidden;
  margin-inline: 1%;
`;
const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;
const HeadingAndActionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const SliderTitle = styled.h3`
  text-transform: capitalize;
  letter-spacing: 1px;
`;
const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  margin-inline: auto;
  margin-bottom: 1rem;
`;

const BaseButton = styled.button`
  width: ${40 / 16}rem;
  height: ${40 / 16}rem;
  border-radius: 50%;
  border: 2px dashed ${COLORS.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > * {
    transform: translateX(-20%);
  }
`;
const PrevButton = styled(BaseButton)`
  transform: rotateY(180deg);
`;
const NextButton = styled(BaseButton)``;
