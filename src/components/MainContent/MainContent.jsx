/* eslint-disable no-unused-vars */
import { styled } from "styled-components";

import SearchInput from "../SearchInput/SearchInput";

import Courses from "./../Courses/Courses";
import SortFilterInput from "./../SortFilterInput/SortFilterInput";
import CategoryFilterInput from "./../CategoryFilterInput/CategoryFilterInput";
import LevelFilterInput from "./../LevelFilterInput/LevelFilterInput";

function MainContent() {
  return (
    <Wrapper>
      <FilterBar>
        <SearchInput />
        <LevelFilterInput />
        <SortFilterInput />
        <CategoryFilterInput />
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
