// Target Engagement Date (November 15, 2026 at 1:00 PM IST)
const weddingDate = new Date("2026-11-15T13:00:00").getTime();

// Live Countdown Timer
function updateCountdown() {
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Audio Controls
const audio = document.getElementById('wedding-audio');
const audioBtn = document.getElementById('audioBtn');
const audioIcon = document.getElementById('audio-icon');
const musicPrompt = document.getElementById('music-prompt');
let isPlaying = false;

// Function to play music and hide prompt banner
function startMusic() {
  if (!isPlaying && audio) {
    audio.play().then(() => {
      isPlaying = true;
      if (audioIcon) audioIcon.className = 'fas fa-pause';
      if (musicPrompt) musicPrompt.style.opacity = '0';
    }).catch(err => {
      console.log("Audio playback waiting for gesture:", err);
    });
  }
}

// Play song on FIRST scroll or touch/click
function handleFirstScroll() {
  startMusic();
  // Remove event listeners once triggered
  window.removeEventListener('scroll', handleFirstScroll);
  document.removeEventListener('click', handleFirstScroll);
  document.removeEventListener('touchstart', handleFirstScroll);
}

// Listen for first scroll, click, or touch
window.addEventListener('scroll', handleFirstScroll, { passive: true });
document.addEventListener('click', handleFirstScroll, { once: true });
document.addEventListener('touchstart', handleFirstScroll, { once: true });

// Manual Toggle Button
if (audioBtn) {
  audioBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) {
      audio.pause();
      if (audioIcon) audioIcon.className = 'fas fa-music';
      isPlaying = false;
    } else {
      startMusic();
    }
  });
}

// Floating Flower Petals Animation
const petalsContainer = document.getElementById('petals');
if (petalsContainer) {
  for (let i = 0; i < 20; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.width = Math.random() * 10 + 10 + 'px';
    petal.style.height = petal.style.width;
    petal.style.animationDuration = Math.random() * 5 + 5 + 's';
    petal.style.animationDelay = Math.random() * 5 + 's';
    petalsContainer.appendChild(petal);
  }
}