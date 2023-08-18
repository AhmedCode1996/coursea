/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { COLORS, FONT_FAMILY, TYPOGRAPHY } from "../../constants";

import AnimatedIcon from "./../AnimatedIcon/AnimatedIcon";

import planAnimation from "./../../assets/planAnimation.json";
import underline from "./../../assets/underline.json";
import festivalSubscription from "./../../assets/festivalSubscription.json";

function SubscribeNotification({ setModal }) {
  const navigate = useNavigate();
  const { username, plan } = useSelector((state) => state.user);
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
    setModal(false);
  };

  return (
    <Wrapper onClick={clickHandler}>
      <Card
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Icon>
          <AnimatedIcon icon={planAnimation} />
        </Icon>
        <Title>
          <Festival>
            <AnimatedIcon icon={festivalSubscription} />
          </Festival>
          congratulations <Username>{username}</Username>
        </Title>
        <Message>
          now you are {prefix}
          <span>
            {plan}
            <span>
              <AnimatedIcon icon={underline} />
            </span>
          </span>{" "}
          subscriber{" "}
        </Message>
        <ActionButtons>
          <Cancel onClick={clickHandler}>cancel</Cancel>
          <Start
            onClick={() => {
              setModal(false);
              navigate("/account/overview");
            }}
          >
            start learning
          </Start>
        </ActionButtons>
      </Card>
    </Wrapper>
  );
}

export default SubscribeNotification;

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
const Title = styled.div`
  position: relative;
`;
const Festival = styled.span`
  position: absolute;
  top: -100%;
  left: 0;
  pointer-events: none;
`;
const Username = styled.span`
  display: block;
  text-align: center;
  background: linear-gradient(
    14deg,
    rgba(0, 20, 36, 1) 0%,
    rgba(9, 85, 121, 1) 70%,
    rgba(0, 212, 255, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
