/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import clock from "./../assets/clock.png";
import user from "./../assets/user.png";
import document from "./../assets/document.png";
import star from "./../assets/star.png";

import playButton from "./../assets/play.svg";
import pauseButton from "./../assets/pause.svg";
import fullScreenButton from "./../assets/fullScreen.svg";
import volumbeButton from "./../assets/volume.svg";
import screenMirroringButton from "./../assets/screenmirroring.svg";

import Video from "./../components/Video/Video";

import { getAllCourses } from "../features/courseSlice";
import { styled } from "styled-components";
import { COLORS, FONT_FAMILY, TYPOGRAPHY } from "../constants";
import { useEffect, useRef, useState } from "react";
import { ColorSchemeProvider } from "@mantine/core";

const Course = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFullDuration, setVideoFullDuration] = useState(0);

  const elementRef = useRef(null);
  const videoRef = useRef(null);

  const { courseid } = useParams();
  const { courses } = useSelector(getAllCourses);
  const targetCourse = courses.find((course) => course.id === Number(courseid));
  const handlePlayPauseClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setVideoFullDuration(videoRef.current.duration.toFixed(0));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setVideoFullDuration(videoRef.current.duration.toFixed(0));
    }
  };

  const fullScreenRequest = () => {
    videoRef.current.requestFullscreen();
  };

  useEffect(() => {
    const videoElement = elementRef.current;
    videoRef.current = videoElement;
    /* 
      autoplay
      controller
      play()
      pause()
      load()
      currentSrc
      duration
      ended
      error
      paused
      playbackRate
      poster
      volume
    */
  }, []);

  return (
    <FullCourseWrapper>
      <CourseWrapper>
        <VideoWrapper>
          <ControlBar>
            <Play
              onClick={handlePlayPauseClick}
              src={!isPlaying ? playButton : pauseButton}
            />
            <ProgressBarWrapper>
              <ProgressBar></ProgressBar>
            </ProgressBarWrapper>
            <VideoDuration>
              <CurrentDuration>2:20/</CurrentDuration>
              <FullDuration>{videoFullDuration}:00</FullDuration>
            </VideoDuration>
            <img onClick={fullScreenRequest} src={fullScreenButton} />
            <img src={screenMirroringButton} />
            <img src={volumbeButton} />
          </ControlBar>
          <VideoElement
            onClick={handlePlayPauseClick}
            ref={elementRef}
            style={{ width: "100%" }}
            src={targetCourse.modules[videoIndex].url}
          ></VideoElement>
        </VideoWrapper>
        <CourseInfo>
          <Title>{targetCourse.title}</Title>
          <MiniInfo>
            <InstructorInfo>
              <InstructorAvatar src={targetCourse.instructor_image} />
              <InstructorName>{targetCourse.instructor_name}</InstructorName>
              <InstructorJob>{targetCourse.instructor_job}</InstructorJob>
              <FollowLink>follow mentor</FollowLink>
            </InstructorInfo>
            <CourseRating>{targetCourse.rating.toFixed(1)}</CourseRating>
          </MiniInfo>
        </CourseInfo>
      </CourseWrapper>
      <CourseCard>
        <Title>{targetCourse.title}</Title>
        <CardCourseInfo>
          <InstructorAvatar src={targetCourse.instructor_image} />
          <InstructorName>{targetCourse.instructor_name}</InstructorName>
          <CourseCardRating image={star}>
            {targetCourse.rating.toFixed(1)}
          </CourseCardRating>
        </CardCourseInfo>
        <CourseDetails>
          <Students image={user}>{targetCourse.students} Student</Students>
          <Modules image={document}>{targetCourse.sections} Module</Modules>
          <Duration image={clock}>{targetCourse.duration}</Duration>
        </CourseDetails>
        <CourseModules>
          <h3>{targetCourse.modules?.length} Modules</h3>
          <ModuleList>
            {targetCourse.modules?.map((module, index) => (
              <ModuleListItem onClick={() => setVideoIndex(index)} key={index}>
                <span>{index + 1}</span>
                <Link>{module.title}</Link>
              </ModuleListItem>
            ))}
          </ModuleList>
        </CourseModules>
      </CourseCard>
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
const VideoWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${744 / 16}rem;
  max-height: ${500 / 16}rem;
`;

const VideoElement = styled.video`
  border-radius: 0.5rem;
`;

const Play = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  /*
    This will make sure that the Play element doesn't capture the click event,
    allowing it to propagate to the parent VideoWrapper.

    With this change, the click event on the Play element should now propagate to the VideoWrapper,
    and both elements will trigger the same click handler,
    allowing you to play or pause the video with either of them.
  */
  /* pointer-events: none; */
`;

const ControlBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  position: absolute;
  bottom: 5%;
  background-color: white;
  height: 3rem;
  width: 90%;
  z-index: 100;
  border-radius: 0.5rem;

  & img {
    cursor: pointer;
  }
`;

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.neutral.softGrey};
  flex: 1;
  height: 0.625rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;
const ProgressBar = styled.div`
  background-color: ${COLORS.neutral.black};
  border-radius: inherit;
  width: 40%;
  height: 100%;
`;
const VideoDuration = styled.div`
  font-family: ${FONT_FAMILY.asap};
  font-weight: 600;
`;
const CurrentDuration = styled.span``;
const FullDuration = styled.span``;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h2`
  color: ${COLORS.neutral.black};
  font-size: ${TYPOGRAPHY.xl2};
`;
const MiniInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${TYPOGRAPHY.sm};
  font-weight: normal;
`;
const InstructorAvatar = styled.img`
  max-width: ${30 / 16}rem;
  max-height: ${30 / 16}rem;
  border-radius: 50%;
`;
const InstructorName = styled.h3`
  font-weight: normal;
  margin-right: auto;
`;

const InstructorJob = styled.h3`
  color: ${COLORS.neutral.darkGrey};
  font-weight: normal;
`;

const FollowLink = styled.button`
  color: ${COLORS.seconday.blue};
  text-transform: capitalize;
  cursor: pointer;
`;

const CourseRating = styled.span`
  color: ${COLORS.neutral.black};
`;

const CourseCard = styled.div`
  --spacing: 30px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  padding: var(--spacing);

  border-radius: 1rem;
`;

const CardCourseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${10 / 16}rem;
`;

const CourseDetailsSingleItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${COLORS.neutral.black};
  font-size: ${TYPOGRAPHY.base};
  font-weight: 500;

  &::before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
  }
`;

const CourseCardRating = styled(CourseDetailsSingleItem)`
  &::before {
    background-image: url(${(props) => props.image && props.image});
  }
`;
const CourseDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Students = styled(CourseDetailsSingleItem)`
  &::before {
    background-image: url(${(props) => props.image && props.image});
  }
`;
const Modules = styled(CourseDetailsSingleItem)`
  &::before {
    background-image: url(${(props) => props.image && props.image});
  }
`;
const Duration = styled(CourseDetailsSingleItem)`
  &::before {
    background-image: url(${(props) => props.image && props.image});
  }
`;

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
