/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useId, useState } from "react";
import { styled } from "styled-components";

import { COLORS, TYPOGRAPHY } from "./../../constants";
import { useSelector } from "react-redux";

function Input(props) {
  const { email, password, authenticated, avatar } = useSelector((state) => state.user);
  const [value, setValue] = useState("");
  const id = useId();

  const defaultValue = props.type === "text" ? email : password;

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    setValue(inputValue);
    props.handleChange && props.handleChange(inputValue);
  };

  return (
    <Wrapper>
      <Label htmlFor={`input${id}`}>{props.children}</Label>
      <InputElement
        id={`input${id}`}
        type={props.type}
        placeholder={props.placeholder}
        value={authenticated ? defaultValue : value}
        onChange={handleInputChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Label = styled.label`
  font-weight: 500;
  font-size: ${TYPOGRAPHY.base};
`;
const InputElement = styled.input`
  --vertical-padding: 8px;
  --horizontal-padding: 15px;
  border: 2px solid var(--border-stroke);
  padding-inline: var(--horizontal-padding);
  padding-block: var(--vertical-padding);
  border-radius: 1rem;
  color: ${COLORS.neutral.black};
  transition: all 0.2s;

  &:focus {
    border: 2px solid ${COLORS.primary};
  }

  &::placeholder {
    color: var(--input-inactive-color);
  }
`;

export default Input;
