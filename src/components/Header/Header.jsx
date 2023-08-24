/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

import { useSelector } from "react-redux";
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";
import animatedAvatar from "./../../assets/animatedAvatar.json";
import animatedLogout from "./../../assets/logout.json";
import BackArrow from "../BackArrow/BackArrow";
import { COLORS, FONT_FAMILY } from "../../constants";

function Header({ LoggedOut, setLoggedOut }) {
  const { avatar, location } = useSelector((state) => state.user);

  return (
    <Wrapper>
      <HeadingAndArrow>
        <Heading>{location}</Heading>
        {location !== "overview" && <BackArrow />}
      </HeadingAndArrow>
      <Logout onClick={() => setLoggedOut(true)}>
        <AnimatedIcon icon={animatedLogout} />
      </Logout>
      <AvatarProfle>
        {!avatar ? (
          <AnimatedIcon icon={animatedAvatar} />
        ) : (
          <img src={avatar} title="avatar picture" />
        )}
      </AvatarProfle>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: -1rem -1rem 2rem -1rem;
  padding-left: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${COLORS.neutral.white};
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.09);
  border-radius: 1rem;

  & > *:not(:first-child) {
    cursor: pointer;
  }
`;
const HeadingAndArrow = styled.div`
  margin-right: auto;
`;
const Heading = styled.h2`
  text-transform: capitalize;
  font-family: ${FONT_FAMILY.pilcrow};
  letter-spacing: 1px;
`;
const Logout = styled.div`
  width: ${35 / 16}rem;
`;
const AvatarProfle = styled.div`
  max-width: ${80 / 16}rem;

  img {
    background-size: cover;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
  }
`;
