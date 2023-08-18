/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import Logo from "../Logo/Logo";
import hamburgerMenu from "./../../assets/sidebar/animatedHamburgerMenu.json";

import SidebarItems from "../SidebarItems/SidebarItems";
import UpgradePro from "../UpgradePro/UpgradePro.jsx";
import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";
import animatedPremium from "./../../assets/animatedPremium.json";
import { useDispatch, useSelector } from "react-redux";
import { setToggleSidebar } from "../../features/user/userSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Sidebar() {
  const { toggleSidebar } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <Wrapper
      as={motion.div}
      layout
      transition={{ type: "spring", stiffness: 80 }}
      toggle={toggleSidebar}
    >
      <SideIcon
        toggle={toggleSidebar}
        onClick={() => dispatch(setToggleSidebar())}
      >
        <AnimatedIcon icon={hamburgerMenu} />
      </SideIcon>
      <Logo color="black" />
      <SidebarItems />
      {toggleSidebar ? (
        <Link
          to={"/account/plans"}
          style={{ width: "4rem", cursor: "pointer", height: "fit-content" }}
        >
          {" "}
          <AnimatedIcon icon={animatedPremium} />{" "}
        </Link>
      ) : (
        <UpgradePro />
      )}
    </Wrapper>
  );
}

export default Sidebar;

const Wrapper = styled.aside`
  display: grid;
  align-content: ${(props) => (props.toggle ? null : "space-between")};
  gap: 0.625rem;
  padding: 1rem;
  position: sticky;
  height: 100dvh;
  top: 0;
  left: 0;
`;
const SideIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: ${(props) => (props.toggle ? "-1rem" : 0)};
  width: ${50 / 16}rem;
  cursor: pointer;
`;
