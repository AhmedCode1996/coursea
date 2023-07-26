/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import playButton from "./../assets/play.svg";
import pauseButton from "./../assets/pause.svg";
import fullScreenButton from "./../assets/fullScreen.svg";
import volumbeButton from "./../assets/volume.svg";
import screenMirroringButton from "./../assets/screenmirroring.svg";

import Video from "./../components/Video/Video";

import { getAllCourses } from "../features/courseSlice";
import { styled } from "styled-components";
import { COLORS, FONT_FAMILY } from "../constants";
import { useEffect, useRef, useState } from "react";

const Course = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const elementRef = useRef(null);
  const videoRef = useRef(null);

  const { courseid } = useParams();
  const { courses } = useSelector(getAllCourses);
  const targetCourse = courses.find((course) => course.id === Number(courseid));

  const handlePlayPauseClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
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
    <div>
      <VideoWrapper>
        <ControlBar>
          <Play
            onClick={handlePlayPauseClick}
            src={!isPlaying ? playButton : pauseButton}
          />
          <ProgressBarWrapper>
            <ProgressBar></ProgressBar>
          </ProgressBarWrapper>
          <Duration>
            <CurrentDuration>2:20/</CurrentDuration>
            <FullDuration>10:00</FullDuration>
          </Duration>
          <img onClick={fullScreenRequest} src={fullScreenButton} />
          <img src={screenMirroringButton} />
          <img src={volumbeButton} />
        </ControlBar>
        <VideoElement
          onClick={handlePlayPauseClick}
          ref={elementRef}
          style={{ width: "100%" }}
          src="https://download-video.akamaized.net/v2-1/playback/5f2ad7e4-0f3d-4cda-83fd-3aef3e8b23e0/62534a16?__token__=st=1690375053~exp=1690389453~acl=%2Fv2-1%2Fplayback%2F5f2ad7e4-0f3d-4cda-83fd-3aef3e8b23e0%2F62534a16%2A~hmac=920a4deb1c2131209722e35f33513345ac7aa0f82795c4d4d37de72de862e565&r=dXMtY2VudHJhbDE%3D"
        ></VideoElement>
      </VideoWrapper>
    </div>
  );
};

export default Course;

const VideoWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
const Duration = styled.div`
  font-family: ${FONT_FAMILY.asap};
  font-weight: 600;
`;
const CurrentDuration = styled.span``;
const FullDuration = styled.span``;
