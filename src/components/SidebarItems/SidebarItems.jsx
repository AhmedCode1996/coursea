import { styled } from "styled-components";
import sidebarData from "../../data/sidebarData";
import { COLORS, TYPOGRAPHY } from "../../constants";
import arrowDown from "./../../assets/sidebar/arrow-down.png";
import arrowUp from "./../../assets/sidebar/arrow-up.png";
import { useState } from "react";
import ExpandCourses from "../ExpandCourses/ExpandCourses";

function SidebarItems() {
  const [expand, setIsExpand] = useState(false);
  return (
    <Wrapper>
      <List>
        {sidebarData.map((item) => {
          return (
            <ListItem key={item.id}>
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
`;
const ListItem = styled.li`
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
