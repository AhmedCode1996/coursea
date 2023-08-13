/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { COLORS } from "../../constants";
import { Link } from "react-router-dom";

function CourseCardModules({ selectedCourseModules, handleVideoIndex }) {
  return (
    <CourseModules>
      <h3>{selectedCourseModules.modules.length} Modules</h3>
      <ModuleList>
        {selectedCourseModules.modules.map((module, index) => (
          <ModuleListItem onClick={() => handleVideoIndex(index)} key={index}>
            <span>{index + 1}</span>
            <Link>{module.title}</Link>
          </ModuleListItem>
        ))}
      </ModuleList>
    </CourseModules>
  );
}

export default CourseCardModules;

const CourseModules = styled.div``;

const ModuleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: ${30 / 16}rem;
`;

const ModuleListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;

  span {
    width: ${30 / 16}rem;
    height: ${30 / 16}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 5px;
    background-color: ${COLORS.neutral.softGrey};
    color: ${COLORS.neutral.black};
    font-weight: bold;
  }

  a {
    color: ${COLORS.neutral.darkGrey};
  }
`;