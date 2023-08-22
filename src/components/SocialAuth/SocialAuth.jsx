/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import facebookIcon from "./../../assets/facebook.png";
import googleIcon from "./../../assets/google.png";

import { TYPOGRAPHY } from "../../constants";

function SocialAuth(props) {
  let AuthType = "";
  if (props.type === "google") AuthType = googleIcon;
  if (props.type === "facebook") AuthType = facebookIcon;
  return (
    <Wrapper>
      <img src={AuthType} />
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
