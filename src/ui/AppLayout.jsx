/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import AuthenticationPicture from "../components/AuthenticationPicture/AuthenticationPicture";

import { QUERIES } from "../constants";

const AppLayout = () => {
  return (
    <Wrapper>
      <AuthenticationPicture />
      <AuthWrappers>
        <Outlet />
      </AuthWrappers>
    </Wrapper>
  );
};

export default AppLayout;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100dvh;
  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: 100%;
  }
`;
const AuthWrappers = styled.div``;
