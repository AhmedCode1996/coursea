import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

import Input from "../components/Input/Input";
import AuthButton from "../components/AuthButton/AuthButton";
import AvatarInput from "../components/AvatarInput/AvatarInput";

import { COLORS, TYPOGRAPHY } from "../constants";

function SignUp() {
  const [signUpInformation, setSignUpInformation] = useState({
    emailaddress: "",
    username: "",
    password: "",
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpInformation((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Wrapper>
      <Heading>
        <h2>Create An Account</h2>
        <p>
          Already have an account ? <LinkRef to="/signin">Login</LinkRef>
        </p>
      </Heading>
      <Input
        handleSignUpChange={handleSignUpChange}
        type="text"
        placeholder="Your Email"
      >
        email address
      </Input>
      <Input
        handleSignUpChange={handleSignUpChange}
        type="text"
        placeholder="Your Username"
      >
        username
      </Input>
      <Input
        handleSignUpChange={handleSignUpChange}
        type="password"
        placeholder="Your password"
      >
        password
      </Input>
      <AvatarInput>upload your avatar</AvatarInput>
      <AuthButton signUpInformation={signUpInformation} type="create">
        Create
      </AuthButton>
      <Recaptcha>
        <input type="checkbox" />
        <label>
          By clicking Create account, I agree that I have read and accepted the{" "}
          <LinkRef>Terms of Use</LinkRef> and <LinkRef>Privacy Policy</LinkRef>
        </label>
      </Recaptcha>
    </Wrapper>
  );
}

export default SignUp;

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
const Recaptcha = styled.div`
  label {
    color: ${COLORS.neutral.darkGrey};
    font-size: ${TYPOGRAPHY.sm};
  }
`;

const LinkRef = styled(Link)`
  color: ${COLORS.seconday.blue};
`;
