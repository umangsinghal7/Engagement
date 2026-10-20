// Target Wedding Date (November 24, 2026 at 7:00 PM IST)
const weddingDate = new Date("2026-11-24T19:00:00").getTime();

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
let isPlaying = false;

// Function to play audio
function playMusic() {
  if (!isPlaying && audio) {
    audio.play().then(() => {
      isPlaying = true;
      if (audioIcon) audioIcon.className = 'fas fa-pause';
    }).catch(err => {
      console.log("Autoplay blocked by browser policy, waiting for user tap:", err);
    });
  }
}

// 1. Try playing immediately when page loads
window.addEventListener('load', () => {
  playMusic();
});

// 2. Play on first user interaction (touch, tap, click, scroll) if auto-blocked
const userInteractions = ['click', 'touchstart', 'scroll', 'keydown'];
userInteractions.forEach(event => {
  document.addEventListener(event, function startAudioOnInteraction() {
    if (!isPlaying) {
      playMusic();
    }
    userInteractions.forEach(e => document.removeEventListener(e, startAudioOnInteraction));
  }, { once: true });
});

// 3. Manual toggle button click
if (audioBtn) {
  audioBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent document listener conflict
    if (isPlaying) {
      audio.pause();
      if (audioIcon) audioIcon.className = 'fas fa-music';
      isPlaying = false;
    } else {
      audio.play().then(() => {
        isPlaying = true;
        if (audioIcon) audioIcon.className = 'fas fa-pause';
      });
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