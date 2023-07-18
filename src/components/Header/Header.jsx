import { styled } from "styled-components";

import notificationPicture from "./../../assets/notification.png";
import avatarPicure from "./../../assets/avatarProfile.png";

function Header() {
  return (
    <Wrapper>
      <Heading>Explore Courses</Heading>
      <Notification>
        <img src={notificationPicture} title="notification picture" />
      </Notification>
      <AvatarProfle>
        <img src={avatarPicure} title="avatar picture" />
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
const AvatarProfle = styled.div``;
