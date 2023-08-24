import { styled } from "styled-components";
import AnimatedIcon from "./../AnimatedIcon/AnimatedIcon";
import notFoundIcon from "./../../assets/pageNotFound.json";
import BackArrow from "./../BackArrow/BackArrow";
import { FONT_FAMILY, TYPOGRAPHY } from "../../constants";

function ErrorPage() {
  return (
    <Wrapper>
      <IconWrapper>
        <AnimatedIcon icon={notFoundIcon} />
      </IconWrapper>
      <ArrowWrapper>
        <BackArrow />
        <h3>go back</h3>
      </ArrowWrapper>
    </Wrapper>
  );
}

export default ErrorPage;
const Wrapper = styled.div`
  --spacing: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--spacing);
  min-height: 100dvh;
`;
const IconWrapper = styled.span`
  width: clamp(${350 / 16}rem, ${550 / 16}rem, ${700 / 16}rem);
`;
const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing);
  text-transform: capitalize;
  font-family: ${FONT_FAMILY.pilcrow};
  font-size: ${TYPOGRAPHY.lg};
`;
