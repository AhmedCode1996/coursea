/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { styled } from "styled-components";

import { COLORS, FONT_FAMILY, TYPOGRAPHY } from "../../constants";

import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";

import warningIcon from "../../assets/warning.json";
import { setLogout, setPlan } from "../../features/user/userSlice";
import { supabase } from "../../services/supabase";
import { useNavigate } from "react-router-dom";

function LogoutModal({ loggedOut, setLoggedOut }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    let { error } = await supabase.auth.signOut();
  };

  const clickLogoutHandler = () => {
    logout();
    dispatch(setLogout());
    setLoggedOut(false);
    navigate("/signup");
  };
  const clickHandler = (e) => {
    e.stopPropagation();
    setLoggedOut(false);
  };
  return (
    <Wrapper onClick={clickHandler}>
      <Card>
        <Icon>
          <AnimatedIcon icon={warningIcon} />
        </Icon>
        <Message>are you sure that you wanted to logout ?</Message>
        <ActionButtons>
          <Cancel onClick={clickHandler}>cancel</Cancel>
          <Start onClick={clickLogoutHandler}>logout</Start>
        </ActionButtons>
      </Card>
    </Wrapper>
  );
}

export default LogoutModal;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 100;
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
