import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

import Icon from "./../../assets/search-normal.png";
import { COLORS, TYPOGRAPHY } from "../../constants";
import { useDispatch } from "react-redux";
import { searchFilter } from "../../features/courseSlice";

function SearchInput() {
  const WrapperRef = useRef();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [position, setPosition] = useState(0);

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setValue(query);
    dispatch(searchFilter(query));
  };

  useEffect(() => {
    const elementWidth = WrapperRef.current.getBoundingClientRect().height;
    setPosition(elementWidth);
  }, []);

  return (
    <Wrapper ref={WrapperRef}>
      <InputElement
        value={value}
        onChange={handleSearchInput}
        placeholder="Search Course Name/Mentor"
      />
      <SearchIcon position={position} src={Icon} title="Search input Icon" />
    </Wrapper>
  );
}

export default SearchInput;

const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${COLORS.neutral.softGrey};
  border-radius: 10px;
`;
const InputElement = styled.input`
  --horizontal-padding: 20px;
  border-radius: 10px;
  padding-inline: var(--horizontal-padding);
  padding-block: calc(var(--horizontal-padding) / 2);
  width: 100%;
  background-color: ${COLORS.neutral.white};
  transition: all 0.3s;
  font-weight: 500;
  text-transform: capitalize;

  &::placeholder {
    font-size: ${TYPOGRAPHY.sm};
  }

  &:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }
`;
const SearchIcon = styled.img`
  position: absolute;
  top: ${(props) => props.position && props.position / 2}px;
  right: ${(props) => props.position && props.position / 2}px;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
