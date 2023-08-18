/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";

import { setFollow } from "../../features/user/userSlice";

import { COLORS, TYPOGRAPHY } from "../../constants";

function FollowLink({ course }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const dispatch = useDispatch();

  return (
    <LinkWrapper
      following={isFollowing.toString()}
      onClick={() => {
        if (!isFollowing) {
          dispatch(
            setFollow({
              id: course.id,
              name: course.name,
              job: course.job,
              image: course.image,
            })
          );
        }
        setIsFollowing(!isFollowing);
      }}
    >
      {isFollowing ? "followed" : "follow"}
    </LinkWrapper>
  );
}

export default FollowLink;

const LinkWrapper = styled.button`
  color: ${(props) =>
    props.following === "true"
      ? COLORS.neutral.darkGrey
      : COLORS.seconday.blue};
  text-transform: capitalize;
  font-size: ${TYPOGRAPHY.sm};
  cursor: pointer;
`;
