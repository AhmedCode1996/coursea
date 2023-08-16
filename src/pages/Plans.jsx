/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { styled } from "styled-components";

import { setLocation, setPlan } from "../features/user/userSlice";
import { COLORS, TYPOGRAPHY } from "../constants";

import { plans } from "../data/plans";
import SubscribeNotification from "../components/SubscribeNotification/SubscribeNotification";
import Warning from "../components/Warning/Warning";
import { useLocation } from "react-router-dom";

const Plans = () => {
  const data = useLocation();
  const location = data.pathname.split("/")[2];

  const { plan } = useSelector((state) => state.user);
  const [planType, setPlanType] = useState(plan);
  const [index, setIndex] = useState(1);
  const [modal, setModal] = useState(false);
  const [premium, setPremium] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocation(location));
  }, [location, dispatch]);
  return (
    <Wrapper>
      {plans.map((element) => (
        <SinglePlan
          key={element.id}
          onClick={() => {
            const value = element.id;
            setIndex(value);
            if (planType === "free") {
              dispatch(setPlan(element.title));
              setModal(true);
              setPremium(false);
              setPlanType(element.title);
            } else {
              setModal(false);
              setPremium(true);
              setPlanType(element.title);
            }
          }}
          className={index === element.id && "active"}
        >
          <LeftCorner>
            <PlanTitle>{element.title}</PlanTitle>
            <PlanDuration>{element.duration}</PlanDuration>
            <Button>go {element.title}</Button>
          </LeftCorner>
          <RightCorner>
            <PlanPrice>${element.price}</PlanPrice>
            <PlanDiscount>{element.discount}</PlanDiscount>
          </RightCorner>
        </SinglePlan>
      ))}
      {modal && <SubscribeNotification setModal={setModal} />}
      {premium && (
        <Warning
          setPremium={setPremium}
          planType={planType}
          setModal={setModal}
        />
      )}
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
  margin-inline: 5%;
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
