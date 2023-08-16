/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Lottie from "lottie-react";

function AnimatedIcon({ icon, loop = true }) {
  return <Lottie animationData={icon} loop={loop} />;
}

export default AnimatedIcon;
