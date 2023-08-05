/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { getAllCourses } from "../features/courseSlice";
import { COLORS, FONT_FAMILY, TYPOGRAPHY } from "../constants";

import AnimatedIcon from "../components/AnimatedIcon/AnimatedIcon";

import clock from "./../assets/clock.png";
import user from "./../assets/user.png";
import document from "./../assets/document.png";
import star from "./../assets/star.png";
import staticArrow from "./../assets/staticLeftArrow.png";
import animatedArrow from "./../assets/animatedLeftArrow.json";
import staticCheckMark from "./../assets/staticCheckMark.png";
import animatedCheckMark from "./../assets/animatedCheckMark.json";

import playButton from "./../assets/play.svg";
import pauseButton from "./../assets/pause.svg";
import fullScreenButton from "./../assets/fullScreen.svg";
import volumbeButton from "./../assets/volume.svg";
import screenMirroringButton from "./../assets/screenmirroring.svg";
import { setFollow } from "../features/user/userSlice";
import FollowLink from "../components/FollowLink/FollowLink";

const Course = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [contentToggle, setContentToggle] = useState(1);
  const [keyPointToggle, setKeyPointToggle] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoFullDuration, setVideoFullDuration] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);

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
      // setVideoCurrentTime(videoRef.current.currentTime.toFixed(2));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setVideoFullDuration(videoRef.current.duration.toFixed(0));
      setVideoCurrentTime(videoRef.current.currentTime.toFixed(2));
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
        <BackArrow
          onMouseLeave={() => setIsAnimating(false)}
          onMouseEnter={() => setIsAnimating(true)}
          onClick={() => navigate(-1)}
        >
          {isAnimating ? (
            <AnimatedIcon icon={animatedArrow} />
          ) : (
            <img src={staticArrow} />
          )}
        </BackArrow>
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
              <CurrentDuration>{videoCurrentTime}/</CurrentDuration>
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
              <FollowLink course={targetCourse} />
            </InstructorInfo>
            <CourseRating>{targetCourse.rating.toFixed(1)}</CourseRating>
          </MiniInfo>
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
                  {targetCourse.description.map((cours, index) => (
                    <p className="content-paragraph" key={index}>
                      {cours}
                    </p>
                  ))}

                  <h3>key point</h3>
                  <ul className="points-list">
                    {targetCourse.keyPoints.map((cours, index) => (
                      <li
                        className="list-item"
                        key={index}
                        onMouseEnter={() => {
                          setKeyPointToggle(index);
                        }}
                      >
                        {keyPointToggle === index ? (
                          <span style={{ width: "24px" }}>
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
        </CourseInfo>
      </CourseWrapper>
      <CourseCard>
        <CardTitle>{targetCourse.title}</CardTitle>
        <CardCourseInfo>
          <InstructorAvatar src={targetCourse.instructor_image} />
          <CardInstructorName>
            {targetCourse.instructor_name}
          </CardInstructorName>
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
        <button>join course</button>
      </CourseCard>
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
const BackArrow = styled.div`
  width: ${24 / 16}rem;
  height: ${24 / 16}rem;
  position: absolute;
  top: -2rem;
  cursor: pointer;
`;
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
  padding: 1rem;
`;
const Title = styled.h2`
  color: ${COLORS.neutral.black};
  font-size: ${TYPOGRAPHY.xl2};
`;

const CardTitle = styled(Title)`
  font-size: ${TYPOGRAPHY.lg};
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

const CardInstructorName = styled(InstructorName)`
  color: ${COLORS.neutral.darkGrey};
`;

const InstructorJob = styled.h3`
  color: ${COLORS.neutral.darkGrey};
  font-weight: normal;
`;

const CourseRating = styled.span`
  color: ${COLORS.neutral.black};
`;

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
        width: ${24 / 16}rem;
      }
    }
  }
  .active {
    display: block;
  }
`;

const CourseCard = styled.div`
  --spacing: 30px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  padding: var(--spacing);
  border-radius: 1rem;
  height: fit-content;
  position: sticky;
  top: 0;

  button {
    background-color: ${COLORS.primary};
    color: ${COLORS.neutral.black};
    text-transform: capitalize;
    font-weight: 600;
    border-radius: 10px;
    padding: 13px 24px;
    cursor: pointer;
  }
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
