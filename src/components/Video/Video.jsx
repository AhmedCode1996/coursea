/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";

const Video = ({ url, thumbnail }) => {
  return (
    <ReactPlayer url={url} controls={true} light={thumbnail} playing={true} />
  );
};

export default Video;
