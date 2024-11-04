const video = document.querySelector('.video');
const playButton = document.querySelector('.player__button');
const volumeControl = document.querySelector('.volume');
const playbackSpeedControl = document.querySelector('.playbackSpeed');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const skipButtons = document.querySelectorAll('.skip');

// Toggle play and pause
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playButton.textContent = '►';
    }
}

// Update volume
function updateVolume() {
    video.volume = volumeControl.value;
}

// Update playback speed
function updatePlaybackSpeed() {
    video.playbackRate = playbackSpeedControl.value;
}

// Skip functionality
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Update progress bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

// Set video time based on progress bar click
function setProgress(e) {
    const newTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = newTime;
}

// Event Listeners
playButton.addEventListener('click', togglePlay);
volumeControl.addEventListener('input', updateVolume);
playbackSpeedControl.addEventListener('input', updatePlaybackSpeed);
skipButtons.forEach(button => button.addEventListener('click', skip));
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', setProgress);
