/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";

import { COLORS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { joinCourse } from "../../features/user/userSlice";
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";
import festivalIcon from "./../../assets/festival.json";
function JoinButton({ courseId }) {
  const { joinedCourses } = useSelector((state) => state.user);
  const [clicked, setClicked] = useState(false);
  const [isExist, setIsExist] = useState(joinedCourses.includes(courseId));
  const dispatch = useDispatch();

  return (
    <ButtonWrapper
      isExist={isExist}
      disabled={isExist}
      onClick={() => {
        dispatch(joinCourse(courseId));
        setIsExist(true);

        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 4000);
      }}
    >
      {clicked && (
        <FestivalWrapper>
          <AnimatedIcon icon={festivalIcon} />
        </FestivalWrapper>
      )}
      <span>{isExist ? "joined" : "join course"}</span>
    </ButtonWrapper>
  );
}

export default JoinButton;

const ButtonWrapper = styled.button`
  position: relative;
  background-color: ${COLORS.primary};
  border: 3px solid
    ${(props) => (props.isExist ? COLORS.neutral.grey : "transparent")};
  color: ${COLORS.neutral.black};
  text-transform: capitalize;
  font-weight: 600;
  border-radius: 10px;
  padding: 13px 24px;
  cursor: pointer;
`;
const FestivalWrapper = styled.div`
  max-width: ${160 / 16}rem;
  position: absolute;
  top: -107%;
  left: -10%;
`;
