import { styled } from "styled-components";

import notificationPicture from "./../../assets/notification.png";
import { useSelector } from "react-redux";

function Header() {
  const { avatar } = useSelector((state) => state.user);
  return (
    <Wrapper>
      <Heading>Explore Courses</Heading>
      <Notification>
        <img src={notificationPicture} title="notification picture" />
      </Notification>
      <AvatarProfle>
        <img src={avatar} title="avatar picture" />
      </AvatarProfle>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  & > *:not(:first-child) {
    cursor: pointer;
  }
`;
const Heading = styled.h2`
  margin-right: auto;
`;
const Notification = styled.div``;
const AvatarProfle = styled.div`
  max-width: ${50 / 16}rem;

  img {
    background-size: cover;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
  }
`;
