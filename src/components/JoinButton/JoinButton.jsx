import { styled } from "styled-components";

import { COLORS } from "../../constants";

function JoinButton() {
  return <ButtonWrapper>join course</ButtonWrapper>;
}

export default JoinButton;

const ButtonWrapper = styled.button`
  background-color: ${COLORS.primary};
  color: ${COLORS.neutral.black};
  text-transform: capitalize;
  font-weight: 600;
  border-radius: 10px;
  padding: 13px 24px;
  cursor: pointer;
`;
