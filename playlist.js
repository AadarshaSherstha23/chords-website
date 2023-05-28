const audioElements = document.querySelectorAll("audio");


audioElements.forEach(audio => {
  audio.addEventListener("play", () => {
    pauseOtherSongs(audio);
  });
});


function pauseOtherSongs(currentAudio) {
  audioElements.forEach(audio => {
    if (audio !== currentAudio) {
      audio.pause();
    }
  });
}
