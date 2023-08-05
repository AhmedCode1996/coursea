/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";

import { setFollow } from "../../features/user/userSlice";

import { COLORS } from "../../constants";

function FollowLink({ course }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const dispatch = useDispatch();

  return (
    <LinkWrapper
      isFollowing={isFollowing}
      onClick={() => {
        if (!isFollowing) {
          dispatch(
            setFollow({
              name: course.instructor_name,
              job: course.instructor_job,
              image: course.instructor_image,
            })
          );
        }
        setIsFollowing(!isFollowing);
      }}
    >
      {isFollowing ? "follow mentor" : "followed"}
    </LinkWrapper>
  );
}

export default FollowLink;

const LinkWrapper = styled.button`
  color: ${(props) =>
    props.isFollowing ? COLORS.seconday.blue : COLORS.neutral.darkGrey};
  text-transform: capitalize;
  cursor: pointer;
`;
