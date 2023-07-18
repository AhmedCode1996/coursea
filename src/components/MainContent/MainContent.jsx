/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

import SearchInput from "../SearchInput/SearchInput";
import FilterInput from "../FilterInput/FilterInput";

import Courses from "./../Courses/Courses";

function MainContent() {
  return (
    <Wrapper>
      <SearchInput />
      <FilterInput />
      <Courses />
    </Wrapper>
  );
}

export default MainContent;

const Wrapper = styled.main``;
