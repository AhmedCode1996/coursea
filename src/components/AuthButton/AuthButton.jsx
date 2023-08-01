/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { COLORS, TYPOGRAPHY } from "../../constants";
import { createUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthButton(props) {
  const navigate = useNavigate();

  const { email, password, authenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  function handelAuthButton(e) {
    e.preventDefault();
    const userCredentials = {
      email,
      password,
    };
    if (!authenticated) {
      dispatch(createUser(userCredentials));
      navigate("/");
    } else {
      navigate("/account");
    }
  }
  return (
    <Wrapper onClick={handelAuthButton} type={props.type}>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  --horizontal-padding: ${20 / 16}rem;
  --vertical-padding: ${8 / 16}rem;
  ${(props) =>
    props.type === "sign" &&
    css`
      background-color: ${COLORS.primary};

      color: ${COLORS.neutral.black};
    `}
  ${(props) =>
    props.type === "forgot" &&
    css`
      color: ${COLORS.neutral.darkGrey};
      background-color: white;
    `}
  ${(props) =>
    props.type === "create" &&
    css`
      color: ${COLORS.neutral.darkGrey};
      background-color: ${COLORS.neutral.softGrey};
    `}
  font-size: ${TYPOGRAPHY.base};
  border-radius: var(--button-border-radius);
  padding-inline: var(--horizontal-padding);
  padding-block: var(--vertical-padding);
  font-weight: 500;
  min-width: ${170 / 16}rem;
  text-transform: capitalize;
  cursor: pointer;
`;

export default AuthButton;
