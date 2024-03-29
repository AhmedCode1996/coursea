import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Input from "../components/Input/Input";
import AuthButton from "../components/AuthButton/AuthButton";
// import SocialAuth from "../components/SocialAuth/SocialAuth";

import { COLORS, TYPOGRAPHY } from "../constants";
import { useSelector } from "react-redux";

const SignIn = () => {
  const { error } = useSelector((state) => state.user);
  console.log(error);
  const [loginInformation, setLoginInformation] = useState({
    emailaddress: "",
    password: "",
  });

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setLoginInformation((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Wrapper>
      <Heading>
        <h2>Sign In</h2>
        <p>
          New user ? <LinkRef to="/">Create an account</LinkRef>
        </p>
      </Heading>
      <Input
        type="text"
        placeholder="Your Email"
        handleSignInChange={handleSignInChange}
      >
        email address
      </Input>
      <Input
        type="password"
        placeholder="Your password"
        handleSignInChange={handleSignInChange}
      >
        password
      </Input>
      <ActionButtons>
        <AuthButton type="forgot">forgot password ?</AuthButton>
        <AuthButton loginInformation={loginInformation} type="sign">
          sign in
        </AuthButton>
      </ActionButtons>
      {/* <Divider>
        <span>or</span>
      </Divider>
      <SocialAuth type="google" /> */}
      <Recaptcha>
        <label>
          Protected by reCAPTCHA and subject to the Google{" "}
          <LinkRef>Privacy Policy </LinkRef>
          and <LinkRef>Terms of Service</LinkRef>.
        </label>
      </Recaptcha>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-inline: 5rem;
  margin-top: 1rem;
`;

const Heading = styled.div`
  h2 {
    margin-bottom: 10px;
    font-size: ${TYPOGRAPHY.xl3};
    font-weight: 500;
  }
  a {
    font-weight: 500;
  }
`;
const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const Divider = styled.div`
//   position: relative;
//   width: 100%;
//   height: 1px;
//   background-color: ${COLORS.neutral.softGrey};
//   color: ${COLORS.neutral.black};
//   font-size: ${TYPOGRAPHY.lg};

//   span {
//     display: block;
//     background-color: ${COLORS.neutral.white};
//     position: absolute;
//     line-height: 2;
//     left: 50%;
//     top: 50%;
//     padding-inline: 2rem;
//     transform: translate(-50%, -50%);
//   }
// `;

const Recaptcha = styled.div`
  label {
    color: ${COLORS.neutral.darkGrey};
    font-size: ${TYPOGRAPHY.sm};
  }
`;

const LinkRef = styled(Link)`
  color: ${COLORS.seconday.blue};
`;
