import { styled } from "styled-components";
import sidebarData from "../../data/sidebarData";
import { COLORS, TYPOGRAPHY } from "../../constants";
import arrowDown from "./../../assets/sidebar/arrow-down.png";
import arrowUp from "./../../assets/sidebar/arrow-up.png";
import { useState } from "react";
import ExpandCourses from "../ExpandCourses/ExpandCourses";
import { Link } from "react-router-dom";

function SidebarItems() {
  const [expand, setIsExpand] = useState(false);
  return (
    <Wrapper>
      <List>
        {sidebarData.map((item) => {
          return (
            <li key={item.id}>
              <ListItem to={`/account/${item.title}`} key={item.id}>
                <img src={item.lightIcon} title={item.title} />
                <span>{item.title}</span>
                {item.title === "courses" && (
                  <>
                    <img
                      onClick={() => setIsExpand(!expand)}
                      src={!expand ? arrowDown : arrowUp}
                      title="arrow down"
                    />
                    {expand && <ExpandCourses />}
                  </>
                )}
              </ListItem>
            </li>
          );
        })}
      </List>
    </Wrapper>
  );
}

export default SidebarItems;

const Wrapper = styled.nav``;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: auto;

  li {
    transition: all 0.3s;
  }
  & li:active {
    transform: translate(2px, -3px) scale(1.03);
    transition: all 0.3s;
  }
`;
const ListItem = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${20 / 16}rem;
  padding-inline: 1.5rem;
  padding-block: 0.8rem;
  border-radius: 1rem;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.neutral.softGrey};
  }

  img {
    width: ${18 / 16}rem;
    height: ${18 / 16}rem;
  }

  span {
    margin-right: auto;
    color: ${COLORS.neutral.darkGrey};
    font-size: ${TYPOGRAPHY.base};
    text-transform: capitalize;
  }
`;
