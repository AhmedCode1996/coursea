/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useSelector } from "react-redux";

import { getAllCourses } from "../features/courseSlice";

import { COLORS } from "../constants";

import BackArrow from "../components/BackArrow/BackArrow";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import CourseMiniInformation from "../components/CourseMiniInformation/CourseMiniInformation";
import TabsAndContent from "../components/TabsAndContent/TabsAndContent";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CourseCardInformation from "../components/CourseCardInformation/CourseCardInformation";
import CourseCardModules from "../components/CourseCardModules/CourseCardModules";
import JoinButton from "../components/JoinButton/JoinButton";

const Course = () => {
  const [videoIndex, setVideoIndex] = useState(4);
  const [selectedCourse, setSelectedCourse] = useState({});
  const { courseid } = useParams();
  const { courses } = useSelector(getAllCourses);

  const handleVideoIndex = (index) => {
    setVideoIndex(index);
  };

  useEffect(() => {
    const selectedCourse = courses.find(
      (course) => course.id === Number(courseid)
    );
    setSelectedCourse(selectedCourse);
  }, [courseid, courses]);

  return (
    <FullCourseWrapper>
      {Object.keys(selectedCourse || {}).length ? (
        <>
          <CourseWrapper>
            <BackArrow />
            <VideoPlayer videoUrl={selectedCourse.modules[videoIndex].url} />
            <CourseInfo>
              <CourseMiniInformation courseInformation={selectedCourse} />
              <TabsAndContent courseInformation={selectedCourse} />
            </CourseInfo>
          </CourseWrapper>
          <CourseCardWrapper>
            <CourseCardInformation cardInformation={selectedCourse} />
            <CourseDetails details={selectedCourse} />
            <CourseCardModules
              handleVideoIndex={handleVideoIndex}
              selectedCourseModules={selectedCourse}
            />
            <JoinButton />
          </CourseCardWrapper>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </FullCourseWrapper>
  );
};

export default Course;

const FullCourseWrapper = styled.div`
  display: grid;
  column-gap: 30px;
  grid-template-columns: 1fr ${350 / 16}rem;
  padding-top: 1.5rem;

  & > * {
    background-color: ${COLORS.neutral.white};
  }
`;

const CourseWrapper = styled.div`
  position: relative;
`;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 1rem;
`;

const CourseCardWrapper = styled.div`
  --spacing: 30px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  padding: var(--spacing);
  border-radius: 1rem;
  height: fit-content;
  position: sticky;
  top: 0;
`;
