/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { COLORS, FONT_FAMILY } from "../../constants";

import playButton from "./../../assets/play.svg";
import pauseButton from "./../../assets/pause.svg";
import fullScreenButton from "./../../assets/fullScreen.svg";
import volumbeButton from "./../../assets/volume.svg";
import screenMirroringButton from "./../../assets/screenmirroring.svg";
import { displayFormattedTime } from "../../utils/displayFormattedTime";

function VideoPlayer({ videoUrl, handleVideoCompleted }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [videoFullDuration, setVideoFullDuration] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [currentProgress, setCurrentProgress] = useState("");

  const elementRef = useRef(null);
  const videoRef = useRef(null);
  const progressBarElement = useRef(null);

  const handlePlayPauseClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setVideoFullDuration(videoRef.current.duration);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setVideoFullDuration(videoRef.current.duration);
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

  const handleProgressBarClick = (e) => {
    const progressBar = progressBarElement.current;
    const progressBarWidth = progressBar.getBoundingClientRect().width;
    const clickPosition = e.nativeEvent.offsetX;
    const currentTime =
      (clickPosition / progressBarWidth) * videoRef.current.duration;
    videoRef.current.currentTime = currentTime;
  };

  return (
    <VideoWrapper>
      <ControlBar>
        <Play
          onClick={handlePlayPauseClick}
          src={!isPlaying ? playButton : pauseButton}
        />
        <ProgressBarWrapper
          ref={progressBarElement}
          onClick={handleProgressBarClick}
        >
          <ProgressBar currentProgress={currentProgress}></ProgressBar>
        </ProgressBarWrapper>
        <VideoDuration>
          <CurrentDuration>
            {displayFormattedTime(videoCurrentTime)}/
          </CurrentDuration>
          <FullDuration>{displayFormattedTime(videoFullDuration)}</FullDuration>
        </VideoDuration>
        <img onClick={fullScreenRequest} src={fullScreenButton} />
        <img src={screenMirroringButton} />
        <img src={volumbeButton} />
      </ControlBar>
      <VideoElement
        onTimeUpdate={() => {
          setVideoCurrentTime(videoRef.current.currentTime);
          setCurrentProgress(
            `${
              (videoRef.current.currentTime / videoRef.current.duration) * 100
            }%`
          );
          handleVideoCompleted(videoRef.current.ended);
          setCompleted(videoRef.current.ended);
        }}
        onClick={handlePlayPauseClick}
        ref={elementRef}
        style={{ width: "100%" }}
        src={videoUrl}
      ></VideoElement>
    </VideoWrapper>
  );
}

export default VideoPlayer;

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
  z-index: 1;
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
  width: ${(props) => props.currentProgress};
  height: 100%;
`;
const VideoDuration = styled.div`
  font-family: ${FONT_FAMILY.asap};
  font-weight: 600;
`;
const CurrentDuration = styled.span``;
const FullDuration = styled.span``;
