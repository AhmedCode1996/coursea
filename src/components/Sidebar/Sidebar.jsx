import { styled } from "styled-components";
import Logo from "../Logo/Logo";

import SidebarItems from "../SidebarItems/SidebarItems";
import UpgradePro from "../UpgradePro/UpgradePro.jsx";
function Sidebar() {
  return (
    <Wrapper>
      <Logo color="black" />
      <SidebarItems />
      <UpgradePro />
    </Wrapper>
  );
}

export default Sidebar;

const Wrapper = styled.aside`
  display: grid;
  align-content: space-between;
  gap: 0.625rem;
  padding: 1rem;
`;
