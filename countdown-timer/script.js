const daysEle = document.getElementById("days");
const hoursEle = document.getElementById("hours");
const minsEle = document.getElementById("mins");
const secsEle = document.getElementById("secs");

const newYear = "1 Jan 2023";
function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  const left_day = Math.floor(totalSeconds / 3600 / 24);
  const left_hour = Math.floor(totalSeconds / 3600) % 24;
  const left_min = Math.floor(totalSeconds / 60) % 60;
  const left_sec = Math.floor(totalSeconds) % 60;

  // console.log(day, hour, min, sec);
  daysEle.innerHTML = left_day;
  hoursEle.innerHTML = left_hour;
  minsEle.innerHTML = formatTime(left_min);
  secsEle.innerHTML = formatTime(left_sec);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
