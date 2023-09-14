/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { supabase } from "../../services/supabase";

import googleIcon from "./../../assets/google.png";

import { TYPOGRAPHY } from "../../constants";
import { useEffect } from "react";

function SocialAuth(props) {
  const authHandler = async (e) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  return (
    <Wrapper onClick={authHandler}>
      <img src={googleIcon} />
      <span>Sign in with {props.type}</span>
    </Wrapper>
  );
}

export default SocialAuth;

const Wrapper = styled.button`
  --vertical-padding: 0.5rem;
  --border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid var(--auth-border-stroke);
  border-radius: 1rem;
  padding-block: var(--vertical-padding);
  cursor: pointer;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  span {
    color: var(--auth-font-color);
    font-size: ${TYPOGRAPHY.base};
    font-weight: 500;
  }
`;
