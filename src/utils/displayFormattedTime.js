export const displayFormattedTime = (time) => {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : String(seconds).padStart(2, "0");
  return `${minutes}:${seconds}`;
};
