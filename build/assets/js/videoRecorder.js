"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var recorderContainer = document.getElementById("jsRecordContainer"),
    recordBtn = document.getElementById("jsRecordBtn"),
    videoPreview = document.getElementById("jsVideoPreview");
var streamObject;
var videoRecorder;

var handleVideoData = function handleVideoData(event) {
  var videoFile = event.data;
  var link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};

function stopStreamedVideo(videoElem) {
  var stream = videoElem.srcObject;
  var tracks = stream.getTracks();
  tracks.forEach(function (track) {
    track.stop();
  });
  videoElem.srcObject = null;
}

var stopRecording = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            videoRecorder.stop();
            recordBtn.innerHTML = "Start Recording";
            stopStreamedVideo(videoPreview);
            recordBtn.addEventListener("click", getVideo);
            recordBtn.removeEventListener("click", stopRecording);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function stopRecording() {
    return _ref.apply(this, arguments);
  };
}();

var startRecording = function startRecording() {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  recordBtn.innerHTML = "Stop Recording";
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordBtn.addEventListener("click", stopRecording);
};

var getVideo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var stream;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return navigator.mediaDevices.getUserMedia({
              audio: true,
              video: {
                width: 1280,
                height: 720
              }
            });

          case 3:
            stream = _context2.sent;
            videoPreview.srcObject = stream;
            videoPreview.muted = true;
            videoPreview.play();
            streamObject = stream;
            startRecording();
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            recordBtn.innerHTML = "👅 Can't Record";

          case 14:
            _context2.prev = 14;
            recordBtn.removeEventListener("click", getVideo);
            return _context2.finish(14);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11, 14, 17]]);
  }));

  return function getVideo() {
    return _ref2.apply(this, arguments);
  };
}();

function init() {
  recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}