import { Link } from "react-router-dom";
import upgradeProIcon from "./../../assets/sidebar/upgrade pro .png";
import { styled } from "styled-components";
function UpgradePro() {
  return (
    <Wrapper to={"/account/plans"}>
      <img src={upgradeProIcon} title="upgrade pro " />
    </Wrapper>
  );
}

export default UpgradePro;
const Wrapper = styled(Link)`
  img {
    aspect-ratio: 1.4 / 1;
  }
`;
