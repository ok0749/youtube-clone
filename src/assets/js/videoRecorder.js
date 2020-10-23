const recorderContainer = document.getElementById("jsRecordContainer"),
  recordBtn = document.getElementById("jsRecordBtn"),
  videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = (event) => {
  const { data: videoFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};

function stopStreamedVideo(videoElem) {
  const stream = videoElem.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach(function (track) {
    track.stop();
  });

  videoElem.srcObject = null;
}

const stopRecording = async () => {
  videoRecorder.stop();
  recordBtn.innerHTML = "Start Recording";
  stopStreamedVideo(videoPreview);
  recordBtn.addEventListener("click", getVideo);
  recordBtn.removeEventListener("click", stopRecording);
};

const startRecording = () => {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  recordBtn.innerHTML = "Stop Recording";
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordBtn.addEventListener("click", stopRecording);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();

    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.innerHTML = "👅 Can't Record";
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};

function init() {
  recordBtn.addEventListener("click", getVideo);
}
if (recorderContainer) {
  init();
}
