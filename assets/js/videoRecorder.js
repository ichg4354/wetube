const bodyParser = require("body-parser");

const recorderContainer = document.getElementById("jsRecordContainer");
const videoPreview = document.getElementById("jsRecordPreview");
const recordBtn = document.getElementById("jsRecordBtn");

let streamObject;
let videoRecorder;

const handleVideoData = (e) => {
  const videoData = e.data;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoData);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};

const stopRecording = async () => {
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  videoRecorder.stop();
  recordBtn.innerHTML = "Start Recording";
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", getVideo);
};

const startRecording = async () => {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  recordBtn.innerHTML = "Stop Recording";
  recordBtn.removeEventListener("click", getVideo);
  recordBtn.addEventListener("click", stopRecording);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: {
        width: { max: 300 },
        height: { max: 200 },
      },
    });
    videoPreview.muted = true;
    streamObject = stream;
    videoPreview.srcObject = stream;
    startRecording();
    videoPreview.play();
  } catch (error) {
    recordBtn.innerHTML = "😫 Cant Record Video";
  }
};

function init() {
  recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}
