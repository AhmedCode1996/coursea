import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import { COLORS } from "../constants";

import Sidebar from "./../components/Sidebar/Sidebar";
import Header from "./../components/Header/Header";
import { fetchCourses } from "../features/courseSlice";
import LogoutModal from "../components/LogoutModal/LogoutModal";
import useAlan from "../hooks/Alan";

const AppLayoutContent = () => {
  const { toggleSidebar } = useSelector((state) => state.user);
  const assistantBtn = useRef(null);

  const [loggedOut, setLoggedOut] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  useAlan();

  return (
    <>
      <Wrapper toggle={toggleSidebar}>
        <Sidebar />
        <HeaderAndContentWrapper>
          {loggedOut && (
            <LogoutModal loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
          )}
          <Header loggedOut={loggedOut} setLoggedOut={setLoggedOut} />
          <Outlet />
        </HeaderAndContentWrapper>
        <div ref={assistantBtn} />
      </Wrapper>
    </>
  );
};

export default AppLayoutContent;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
      props.toggle ? "auto" : 240 / 16 + "rem"} 1fr;
  background-color: ${COLORS.neutral.lightGrey};
  gap: 8px;
  position: relative;
`;

const HeaderAndContentWrapper = styled.div`
  padding: 1rem;
  min-width: 100%;
`;
