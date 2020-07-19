/* eslint-disable no-undef */
const videoPlayer = document.getElementById("jsVideoPlayer");
const playBtn = document.getElementById("playBtn");
const videoPreview = document.getElementById("jsVideoPlayerPreview");
const volumeBtn = document.getElementById("volumeBtn");
const screenBtn = document.getElementById("screenBtn");
const remainingVideoTime = document.getElementById("remainingVideoTime");
const currentVideoTime = document.getElementById("currentVideoTime");

const handlePlayBtnClick = () => {
  if (videoPreview.paused) {
    videoPreview.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPreview.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
};

const handleScreenBtnDoubleClick = () => {
  screenBtn.innerHTML = '<i class="fas fa-expand"></i>';
  document.exitFullscreen();
  screenBtn.removeEventListener("click", handleScreenBtnDoubleClick);
  screenBtn.addEventListener("click", handleScreenBtnClick);
};

const handleVolumeBtnClick = () => {
  if (videoPreview.muted) {
    videoPreview.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  } else {
    videoPreview.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
};

const handleScreenBtnClick = () => {
  screenBtn.innerHTML = '<i class="fas fa-compress"></i>';
  videoPlayer.requestFullscreen();
  screenBtn.removeEventListener("click", handleScreenBtnClick);
  screenBtn.addEventListener("click", handleScreenBtnDoubleClick);
};

const changeVideoTime = () => {
  getTotalRuntime();
  setInterval(getCurrentRuntime, 1000);
};

const getCurrentRuntime = () => {
  const currentSec = Math.floor(videoPreview.currentTime);
  currentVideoTime.innerHTML = secondsToVideoTime(currentSec);
};

const getTotalRuntime = () => {
  const totalSec = Math.floor(videoPreview.duration);
  remainingVideoTime.innerHTML = secondsToVideoTime(totalSec);
};

const handleEnded = () => {
  videoPreview.pause();
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
};

function init() {
  playBtn.addEventListener("click", handlePlayBtnClick);
  volumeBtn.addEventListener("click", handleVolumeBtnClick);
  screenBtn.addEventListener("click", handleScreenBtnClick);
  videoPreview.addEventListener("canplay", changeVideoTime);
  videoPreview.addEventListener("ended", handleEnded);
}

if (videoPlayer) {
  init();
}

function secondsToVideoTime(inputSec) {
  inputSec = Math.floor(inputSec);
  hours = Math.floor(inputSec / 3600);
  minutes = Math.floor((inputSec - hours * 3600) / 60);
  seconds = Math.floor(inputSec - hours * 3600 - minutes * 60);

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}
