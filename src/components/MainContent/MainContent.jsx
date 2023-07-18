/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

import SearchInput from "../SearchInput/SearchInput";
import FilterInput from "../FilterInput/FilterInput";

import Courses from "./../Courses/Courses";

function MainContent() {
  return (
    <Wrapper>
      <FilterBar>
        <SearchInput />
        <FilterInput type="level" />
        <FilterInput type="sortBy" />
        <FilterInput type="category" />
      </FilterBar>
      <Courses />
    </Wrapper>
  );
}

export default MainContent;

const Wrapper = styled.main``;
const FilterBar = styled.div`
  display: flex;
  gap: 1rem;

  & > *:first-child {
    flex: 1;
    margin-right: auto;
  }
`;
