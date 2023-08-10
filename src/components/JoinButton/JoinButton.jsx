/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";

import { COLORS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { joinCourse } from "../../features/user/userSlice";

function JoinButton({ courseId }) {
  const { joinedCourses } = useSelector((state) => state.user);
  const [isExist, setIsExist] = useState(joinedCourses.includes(courseId));
  const dispatch = useDispatch();

  return (
    <ButtonWrapper
      isExist={isExist}
      onClick={() => {
        dispatch(joinCourse(courseId));
        setIsExist(true);
      }}
    >
      {isExist ? "go to course" : "join course"}
    </ButtonWrapper>
  );
}

export default JoinButton;

const ButtonWrapper = styled.button`
  background-color: ${(props) =>
    props.isExist ? COLORS.neutral.white : COLORS.primary};
  border: 3px solid
    ${(props) => (props.isExist ? COLORS.neutral.grey : "transparent")};
  color: ${COLORS.neutral.black};
  text-transform: capitalize;
  font-weight: 600;
  border-radius: 10px;
  padding: 13px 24px;
  cursor: pointer;
`;
