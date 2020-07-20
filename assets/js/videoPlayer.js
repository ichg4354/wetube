import { postRegisterView } from "../../controllers/videoController";

const videoPlayer = document.getElementById("jsVideoPlayer");
const playBtn = document.getElementById("playBtn");
const videoPreview = document.getElementById("jsVideoPlayerPreview");
const volumeBtn = document.getElementById("volumeBtn");
const screenBtn = document.getElementById("screenBtn");
const remainingVideoTime = document.getElementById("remainingVideoTime");
const currentVideoTime = document.getElementById("currentVideoTime");
const volumeInput = document.getElementById("volumeInput");

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
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    volumeInput.value = videoPreview.volume;
  } else {
    videoPreview.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    volumeInput.value = 0;
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
  registerView();
};

function secondsToVideoTime(inputSec) {
  inputSec = Math.floor(inputSec);
  let hours = Math.floor(inputSec / 3600);
  let minutes = Math.floor((inputSec - hours * 3600) / 60);
  let seconds = Math.floor(inputSec - hours * 3600 - minutes * 60);

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

const handleDrag = (event) => {
  const volumeValue = event.target.value;
  videoPreview.volume = volumeValue;

  if (volumeValue >= 0.6) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else if (volumeValue >= 0.3) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else {
    volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
  }
};

const registerView = async () => {
  const videoId = window.location.href.split("/videos/")[1];
  try {
    fetch(`http://localhost:4000/api/${videoId}/view`);
  } catch (e) {
    console.log(e);
  }
  console.log("worked!!");
};

function init() {
  videoPreview.volume = 0.5;
  playBtn.addEventListener("click", handlePlayBtnClick);
  volumeBtn.addEventListener("click", handleVolumeBtnClick);
  screenBtn.addEventListener("click", handleScreenBtnClick);
  videoPreview.addEventListener("canplay", changeVideoTime);
  videoPreview.addEventListener("ended", handleEnded);
  volumeInput.addEventListener("input", handleDrag);
}

if (videoPlayer) {
  init();
}
