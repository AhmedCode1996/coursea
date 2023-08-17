import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import { COLORS } from "../constants";

import Sidebar from "./../components/Sidebar/Sidebar";
import Header from "./../components/Header/Header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCourses } from "../features/courseSlice";
import LogoutModal from "../components/LogoutModal/LogoutModal";

const AppLayoutContent = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Sidebar />
        <HeaderAndContentWrapper>
          {loggedOut && <LogoutModal loggedOut={loggedOut} setLoggedOut={setLoggedOut}  />}
          <Header loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
          <Outlet />
        </HeaderAndContentWrapper>
      </Wrapper>
    </>
  );
};

export default AppLayoutContent;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${240 / 16}rem 1fr;
  background-color: ${COLORS.neutral.lightGrey};
  gap: 8px;
  position: relative;
`;

const HeaderAndContentWrapper = styled.div`
  padding: 1rem;
`;
