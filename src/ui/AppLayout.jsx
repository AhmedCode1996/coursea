/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import Toast from "./../components/toast/Toast";
import AuthenticationPicture from "../components/AuthenticationPicture/AuthenticationPicture";

import { QUERIES } from "../constants";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const { toastify, toastVariant, toastMessage } = useSelector(
    (state) => state.user
  );
  return (
    <Wrapper>
      <AuthenticationPicture />
      <AuthWrappers>
        <Outlet />
        {toastify && <Toast variant={toastVariant} message={toastMessage} />}
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
