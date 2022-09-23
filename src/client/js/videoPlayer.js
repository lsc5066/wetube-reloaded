const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

const handleplayClick = (e) => {
  if(video.paused) {
    playBtn.innerText = "Pause";
    video.play();
  } else {
    video.pause();
  }
};
const handlePause = () => (playBtn.innerText = "Play");
const handleplay = () => (playBtn.innerText = "Pause");

const handleMute = (e) => {

};

playBtn.addEventListener("click", handleplayClick);
muteBtn.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);
video.aaddEventListener("click", handleplay);