/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Lottie from "lottie-react";

function AnimatedIcon({ icon }) {
  return <Lottie animationData={icon} loop={true} />;
}

export default AnimatedIcon;
