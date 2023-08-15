/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import { plans } from "../data/plans";
import { COLORS, TYPOGRAPHY } from "../constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlan } from "../features/user/userSlice";
import SubscribeNotification from "../components/SubscribeNotification/SubscribeNotification";

const Plans = () => {
  const [index, setIndex] = useState(1);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {plans.map((plan) => (
        <SinglePlan
          key={plan.id}
          onClick={() => {
            const value = plan.id;
            setIndex(value);
            dispatch(setPlan(plan.title));
            setModal(true)
          }}
          className={index === plan.id && "active"}
        >
          <LeftCorner>
            <PlanTitle>{plan.title}</PlanTitle>
            <PlanDuration>{plan.duration}</PlanDuration>
            <Button>go {plan.title}</Button>
          </LeftCorner>
          <RightCorner>
            <PlanPrice>${plan.price}</PlanPrice>
            <PlanDiscount>{plan.discount}</PlanDiscount>
          </RightCorner>
        </SinglePlan>
      ))}
      {modal && <SubscribeNotification setModal={setModal} />}{" "}
    </Wrapper>
  );
};

export default Plans;

const Wrapper = styled.div`
  --gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--gap);
  padding: var(--gap);
`;
const BasePlan = styled.div`
  --bg-color-light: rgba(245, 245, 247, 1);
  --bg-color-dark: ${COLORS.neutral.black};
  --text-color-dark: ${COLORS.neutral.white};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 10px;
  padding: 25px 30px;
  background-color: rgba(245, 245, 247, 1);
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.4);
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 15px 15px -10px rgba(0, 0, 0, 0.4);
    transform: translate(2px, -4px) scale(1.03);
  }

  &.active {
    background: var(--bg-color-dark);
    box-shadow: 0 5px 10px -10px rgba(0, 0, 0, 0.4);
    transform: translate(-2px, 4px) scale(1.03);

    h3 {
      color: var(--text-color-dark);
    }
    p {
      color: ${COLORS.neutral.white};
    }
  }
`;
const SinglePlan = styled(BasePlan)``;
const LeftCorner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const RightCorner = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;
`;

const PlanTitle = styled.h3`
  font-size: ${TYPOGRAPHY.xl2};
  color: ${COLORS.neutral.black};
  font-weight: bold;
  text-transform: capitalize;
`;
const PlanDuration = styled.p`
  font-size: ${TYPOGRAPHY.base};
  color: ${COLORS.neutral.darkGrey};
  text-transform: capitalize;
`;
const Button = styled.div`
  border-radius: 10px;
  background-color: ${COLORS.primary};
  color: ${COLORS.neutral.black};
  font-size: ${TYPOGRAPHY.sm};
  font-weight: 600;
  text-transform: capitalize;
  padding: 13px 24px;
  width: fit-content;
  cursor: pointer;
`;

const PlanPrice = styled.h3`
  font-size: ${TYPOGRAPHY.xl4};
  color: ${COLORS.neutral.black};
  font-weight: 600;
  line-height: 1;
  text-align: right;
`;
const PlanDiscount = styled.p``;
