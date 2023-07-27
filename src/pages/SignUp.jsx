import { styled } from "styled-components";
import { COLORS, TYPOGRAPHY } from "../constants";
import { Link } from "react-router-dom";
import Input from "../components/Input/Input";
import AuthButton from "../components/AuthButton/AuthButton";
import { useDispatch } from "react-redux";
import { setEmail, setPassword } from "../features/user/userSlice";

function SignUp() {
  const dispatch = useDispatch();
  function handleEmailChange(value) {
    dispatch(setEmail(value));
  }
  function handlePasswordChange(value) {
    dispatch(setPassword(value));
  }
  return (
    <Wrapper>
      <Heading>
        <h2>Create An Account</h2>
        <p>
          Already have an account ? <LinkRef>Login</LinkRef>
        </p>
      </Heading>
      <Input
        handleChange={handleEmailChange}
        type="text"
        placeholder="Your Email"
      >
        Email Address
      </Input>
      {/* <Input type="text" placeholder="write your Email again">
        Email Address
      </Input> */}
      <Input
        handleChange={handlePasswordChange}
        type="password"
        placeholder="Your password"
      >
        Password
      </Input>
      <AuthButton type="create">Create</AuthButton>
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
