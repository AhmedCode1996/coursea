/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { getAllCourses } from "../features/courseSlice";

import { COLORS } from "../constants";

import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import CourseMiniInformation from "../components/CourseMiniInformation/CourseMiniInformation";
import TabsAndContent from "../components/TabsAndContent/TabsAndContent";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CourseCardInformation from "../components/CourseCardInformation/CourseCardInformation";
import CourseCardModules from "../components/CourseCardModules/CourseCardModules";
import JoinButton from "../components/JoinButton/JoinButton";
import CourseSpinner from "../components/CourseSpinner/CourseSpinner";
import { setLocation } from "../features/user/userSlice";

const Course = () => {
  const dispatch = useDispatch();
  const [videoIndex, setVideoIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
  const { courseid } = useParams();
  const { courses } = useSelector(getAllCourses);

  const handleVideoIndex = (index) => {
    setVideoIndex(index);
  };

  const handleVideoCompleted = (completed) => {
    setCompleted(completed);
  };

  const handleCompletedCourse = () => {
    const targetCourse = {
      course: selectedCourse.id,
      completedVideos: [],
    };
  };

  useEffect(() => {
    dispatch(setLocation("course"));
  }, [dispatch]);

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
            <VideoPlayer
              selectedCourse={selectedCourse}
              handleVideoCompleted={handleVideoCompleted}
              videoUrl={selectedCourse.modules[videoIndex].url}
            />
            <CourseInfo>
              <CourseMiniInformation courseInformation={selectedCourse} />
              <TabsAndContent courseInformation={selectedCourse} />
            </CourseInfo>
          </CourseWrapper>
          <CourseCardWrapper>
            <CourseCardInformation cardInformation={selectedCourse} />
            <CourseDetails details={selectedCourse} />
            <CourseCardModules
              completed={completed}
              videoIndex={videoIndex}
              handleVideoIndex={handleVideoIndex}
              selectedCourseModules={selectedCourse}
            />
            <JoinButton courseId={courseid} />
          </CourseCardWrapper>
        </>
      ) : (
        <CourseSpinner />
      )}
    </FullCourseWrapper>
  );
};

export default Course;

const FullCourseWrapper = styled.div`
  display: grid;
  column-gap: 30px;
  grid-template-columns: 1fr ${350 / 16}rem;

  & > * {
    background-color: ${COLORS.neutral.white};
  }
`;

const CourseWrapper = styled.div``;

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
