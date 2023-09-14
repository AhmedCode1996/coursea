import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

import Input from "../components/Input/Input";
import AuthButton from "../components/AuthButton/AuthButton";
import AvatarInput from "../components/AvatarInput/AvatarInput";

import { COLORS, TYPOGRAPHY } from "../constants";
import { supabase } from "../services/supabase";

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

  useEffect(() => {
    async function getSession() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user);
    }
    getSession()
  }, []);

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

const LinkRef = styled(Link)`
  color: ${COLORS.seconday.blue};
`;
