/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import logo from "./../../assets/logo.png";
import { COLORS, TYPOGRAPHY } from "../../constants";
import { useSelector } from "react-redux";
function Logo({ color = "black" }) {
  const { toggleSidebar } = useSelector((state) => state.user);

  return (
    <Wrapper toggle={toggleSidebar}>
      <img src={logo} alt="Logo" />
      {toggleSidebar || <Caption type={color}>Coursea</Caption>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: ${(props) => props.toggle && "flex-start"};
  gap: 1rem;
  max-width: ${179 / 16}rem;

  img {
    width: ${40 / 16}rem;
    height: ${40 / 16}rem;
  }
`;

const Caption = styled.span`
  font-weight: 500;
  font-size: ${TYPOGRAPHY.xl2};
  letter-spacing: -1px;
  color: ${(props) => props.type && COLORS.neutral[props.type]};
`;

export default Logo;
