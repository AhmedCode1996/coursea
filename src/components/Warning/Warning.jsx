/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

import { COLORS, FONT_FAMILY, TYPOGRAPHY } from "../../constants";

import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";

import warningIcon from "../../assets/warning.json";
import { setPlan } from "../../features/user/userSlice";
import { motion } from "framer-motion";

function Warning({ setPremium, planType, setModal }) {
  const { plan } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const prefix =
    plan[0] === "a" ||
    plan[0] === "e" ||
    plan[0] === "i" ||
    plan[0] === "o" ||
    plan[0] === "u"
      ? "an "
      : "a ";

  const clickHandler = (e) => {
    e.stopPropagation();
    setPremium(false);
  };
  return (
    <Wrapper
      onClick={clickHandler}
      transition={{ stiffness: 100 }}
      as={motion.div}
    >
      <Card>
        <Icon>
          <AnimatedIcon icon={warningIcon} />
        </Icon>
        <Message>
          you already subscribed to {prefix}
          <span>{plan}</span> plan{" "}
        </Message>
        <ActionButtons>
          <Cancel onClick={clickHandler}>cancel</Cancel>
          <Start
            onClick={() => {
              dispatch(setPlan(planType));
              setPremium(false);
              setModal(true);
            }}
          >
            subscribe
          </Start>
        </ActionButtons>
      </Card>
    </Wrapper>
  );
}

export default Warning;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 10;
  inset: 0;
`;

const Card = styled.div`
  background-color: ${COLORS.neutral.white};
  padding: 0.5rem 3.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: ${TYPOGRAPHY.xl2};
  text-transform: capitalize;
  font-weight: 600;
  font-family: ${FONT_FAMILY.asap};
`;

const Icon = styled.div`
  max-width: ${200 / 16}rem;
`;

const Message = styled.div`
  font-size: ${TYPOGRAPHY.base};
  font-weight: 500;
  color: ${COLORS.neutral.darkGrey};

  span {
    position: relative;
    font-weight: 700;
    color: ${COLORS.primary};
    text-transform: capitalize;

    span {
      position: absolute;
      display: block;
      bottom: -5px;
      left: 0;
    }
  }
`;
const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const BaseButton = styled.button`
  padding: 13px 24px;
  width: fit-content;
  border-radius: 10px;
  border: 1px solid ${COLORS.neutral.softGrey};
  font-size: ${TYPOGRAPHY.sm};
  font-weight: 600;
  cursor: pointer;
`;
const Cancel = styled(BaseButton)``;
const Start = styled(BaseButton)`
  background-color: ${COLORS.primary};
`;
