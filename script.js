var audioPlayer = document.getElementById("audioPlayer");
var albumCover = document.getElementById("album-cover");
var songTitle = document.getElementById("song-title");
var artistName = document.getElementById("artist-name");
var playPauseBtn = document.querySelector("#controls button:nth-child(2)");

// Set initial values
// albumCover.style.backgroundImage = 'url("images/cover.jpg")'; // Replace with the path to your album cover image
songTitle.textContent = "Song Title";
artistName.textContent = "Artist Name";

function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "▶️";
  }
}

function rewind() {
  audioPlayer.currentTime -= 10; // Rewind by 10 seconds
}

function skip() {
  audioPlayer.currentTime += 10; // Skip forward by 10 seconds
}
