/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { COLORS, TYPOGRAPHY } from "../../constants";
import {
  createUser,
  setError,
  setUsername,
  toggleToastify,
} from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthSpinner from "../AuthSpinner/AuthSpinner";
import { supabase } from "../../services/supabase";

function AuthButton(props) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userCredentials = {
    email: "",
    password: "",
    username: "",
  };

  const handelAuthButton = async (e) => {
    e.preventDefault();
    setClicked(true);
    if (props.signUpInformation) {
      userCredentials.email = props.signUpInformation.emailaddress;
      userCredentials.password = props.signUpInformation.password;
      userCredentials.username = props.signUpInformation.username;
      dispatch(createUser(userCredentials))
        .unwrap()
        .then(() => {
          setClicked(false);
          navigate("/signin");
        })
        .catch((error) => {
          setClicked(false);
        });
    }
    if (props.loginInformation) {
      userCredentials.email = props.loginInformation.emailaddress;
      userCredentials.password = props.loginInformation.password;
      let { data, error } = await supabase.auth.signInWithPassword({
        email: props.loginInformation.emailaddress,
        password: props.loginInformation.password,
      });

      if (!error) {
        dispatch(setUsername(data.user.user_metadata.username));
        dispatch(toggleToastify());
        navigate("/account/overview");
        setClicked(false);
      } else {
        setClicked(false);
        dispatch(setError(error.message));
      }
    }
  };

  return (
    <Wrapper onClick={handelAuthButton} type={props.type}>
      {clicked ? <AuthSpinner /> : props.children}
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
    display: flex;
  align-items: center;
  justify-content: center;
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
