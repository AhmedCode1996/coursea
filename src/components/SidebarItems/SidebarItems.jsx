/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import sidebarData from "../../data/sidebarData";
import { COLORS, TYPOGRAPHY } from "../../constants";
import { Link } from "react-router-dom";
import { useId, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function SidebarItems() {
  const { toggleSidebar } = useSelector((state) => state.user);

  const layoutId = useId();
  const [navBackDrop, setNavBackDrop] = useState(null);
  return (
    <Wrapper toggle={toggleSidebar}>
      <List onMouseLeave={() => setNavBackDrop(null)}>
        {sidebarData.map((item) => {
          return (
            <ListItem
              style={{ zIndex: navBackDrop === item.id ? 1 : 2 }}
              key={item.id}
            >
              <ListItemLink
                as={motion.a}
                layout
                onMouseEnter={() => setNavBackDrop(item.id)}
                to={`/account/${item.slug}`}
                key={item.id}
              >
                {navBackDrop === item.id && (
                  <BackdropItem
                    initial={{ borderRadius: 16 }}
                    transition={{ type: "spring", stiffness: 60, damping: 10 }}
                    layoutId={layoutId}
                  />
                )}
                <LinkImage
                  layout="position"
                  src={item.lightIcon}
                  title={item.title}
                />
                {toggleSidebar || (
                  <LinkTitle layout="position">{item.title}</LinkTitle>
                )}
              </ListItemLink>
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

  li {
    position: relative;
  }
`;
const ListItem = styled(motion.li)``;
const ListItemLink = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${20 / 16}rem;
  padding-inline: 1.5rem;
  padding-block: 0.8rem;
  transition: all 0.25s;
  position: relative;
  border-radius: 1rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const LinkTitle = styled(motion.span)`
  margin-right: auto;
  color: ${COLORS.neutral.darkGrey};
  font-size: ${TYPOGRAPHY.base};
  text-transform: capitalize;
`;
const LinkImage = styled(motion.img)`
  width: ${20 / 16}rem;
  height: ${20 / 16}rem;
`;

const BackdropItem = styled(motion.div)`
  position: absolute;
  z-index: -1;
  inset: 0;
  background-color: ${COLORS.neutral.softGrey};
`;
