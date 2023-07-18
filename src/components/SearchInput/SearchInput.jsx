import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

import Icon from "./../../assets/search-normal.png";
import { COLORS, TYPOGRAPHY } from "../../constants";

function SearchInput() {
  const WrapperRef = useRef();
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const elementWidth = WrapperRef.current.getBoundingClientRect().height;
    setPosition(elementWidth);
  }, []);

  return (
    <Wrapper ref={WrapperRef}>
      <InputElement placeholder="Search Course Name/Mentor" />
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
  transition: all 0.3s;
  font-weight: 500;
  text-transform: capitalize;

  &::placeholder {
    font-size: ${TYPOGRAPHY.sm};
  }

  &:focus {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;
const SearchIcon = styled.img`
  position: absolute;
  top: ${(props) => props.position && props.position / 2}px;
  right: ${(props) => props.position && props.position / 2}px;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
