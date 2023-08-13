/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import { COLORS, TYPOGRAPHY } from "../../constants";

import AnimatedIcon from "../AnimatedIcon/AnimatedIcon";

import staticCheckMark from "./../../assets/staticCheckMark.png";
import animatedCheckMark from "./../../assets/animatedCheckMark.json";

function TabsAndContent({ courseInformation }) {
  const [contentToggle, setContentToggle] = useState(1);
  const [keyPointToggle, setKeyPointToggle] = useState(null);

  return (
    <TabsWrapper>
      <Tabs>
        <Tab onClick={() => setContentToggle(1)}>
          <NavTab>about</NavTab>
        </Tab>
        <Tab onClick={() => setContentToggle(2)}>
          <NavTab> assignment </NavTab>
        </Tab>
        <Tab onClick={() => setContentToggle(3)}>
          <NavTab> tools </NavTab>
        </Tab>
        <Tab onClick={() => setContentToggle(4)}>
          <NavTab> review </NavTab>
        </Tab>
      </Tabs>
      <TabsContent>
        <Content>
          <div className={`content ${contentToggle === 1 && "active"}`}>
            <h3>description</h3>
            {courseInformation.description.map((cours, index) => (
              <p className="content-paragraph" key={index}>
                {cours}
              </p>
            ))}

            <h3>key point</h3>
            <ul className="points-list">
              {courseInformation.keyPoints.map((cours, index) => (
                <li
                  className="list-item"
                  key={index}
                  onMouseEnter={() => {
                    setKeyPointToggle(index);
                  }}
                >
                  {keyPointToggle === index ? (
                    <span style={{ width: "32px" }}>
                      <AnimatedIcon icon={animatedCheckMark} />
                    </span>
                  ) : (
                    <img src={staticCheckMark} />
                  )}

                  <p>{cours.substring(0, 30 + index * 4)}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={`content ${contentToggle === 2 && "active"}`}>
            <h3>hello World</h3>
          </div>
        </Content>
      </TabsContent>
    </TabsWrapper>
  );
}

export default TabsAndContent;

const TabsWrapper = styled.div``;
const Tabs = styled.ul`
  display: flex;
  gap: 2.5rem;
  border-bottom: 2px solid ${COLORS.neutral.softGrey};
  padding: 0.6rem 0;
`;
const Tab = styled.li`
  cursor: pointer;
`;

const NavTab = styled(NavLink)`
  color: ${COLORS.neutral.darkGrey};
  font-size: ${TYPOGRAPHY.lg};
  font-weight: 500;
  text-transform: capitalize;
  padding: 0.8rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.4s;

  &:focus {
    border-bottom-color: ${COLORS.primary};
    color: ${COLORS.neutral.black};
  }
`;

const TabsContent = styled.div``;
const Content = styled.div`
  .content {
    display: none;

    & > * + * {
      margin-top: 1.5rem;
    }

    h3 {
      margin-top: 1.5rem;
      font-size: ${TYPOGRAPHY.xl};
    }

    p.content-paragraph {
      font-size: ${TYPOGRAPHY.base};
    }

    .points-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .list-item {
      display: flex;
      align-items: center;
      gap: 10px;
      width: fit-content;

      img {
        width: ${32 / 16}rem;
      }

      p {
        font-size: ${TYPOGRAPHY.lg};
      }
    }
  }
  .active {
    display: block;
  }
`;
