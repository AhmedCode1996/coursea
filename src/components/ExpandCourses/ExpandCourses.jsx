import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { COLORS, TYPOGRAPHY } from "../../constants";

function ExpandCourses() {
  return (
    <>
      <LinkItem>explore courses</LinkItem>
      <LinkItem to="/account/mycourses">my courses</LinkItem>
    </>
  );
}

export default ExpandCourses;

const LinkItem = styled(Link)`
  color: ${COLORS.neutral.darkGrey};
  font-size: ${TYPOGRAPHY.base};
  text-transform: capitalize;
`;
