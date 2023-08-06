import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

import { COLORS } from "../constants";

import Sidebar from "./../components/Sidebar/Sidebar";
import Header from "./../components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCourses } from "../features/courseSlice";

const AppLayoutContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <Wrapper>
      <Sidebar />
      <HeaderAndContentWrapper>
        <Header />
        <Outlet />
      </HeaderAndContentWrapper>
    </Wrapper>
  );
};

export default AppLayoutContent;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${240 / 16}rem 1fr;
  background-color: ${COLORS.neutral.lightGrey};
  gap: 8px;
`;

const HeaderAndContentWrapper = styled.div`
  padding: 1rem;
`;
