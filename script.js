document.addEventListener("DOMContentLoaded", () => {
  // --- Confetti Animation ---
  const end = Date.now() + 3 * 1000; // Run for 3 seconds
  const colors = ["#ffd700", "#c0c0c0", "#ffffff"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  // --- Music Controls ---
  const audio = document.getElementById("birthday-audio");
  const playPauseBtn = document.getElementById("btn-conffeti");

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      // playPauseBtn.textContent = "Pause";
    }
  });

  // --- Balloon Creation ---
  const balloonsContainer = document.querySelector(".balloons-container");
  const balloonColors = [
    "rgba(255, 215, 0, 0.7)",
    "rgba(192, 192, 192, 0.7)",
    "rgba(255, 255, 255, 0.7)",
  ];
  const numBalloons = 10;

  for (let i = 0; i < numBalloons; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${Math.random() * 5 + 8}s`; // 8 to 13 seconds
    balloon.style.animationDelay = `${Math.random() * 5}s`;
    balloon.style.backgroundColor = balloonColors[i % balloonColors.length];
    balloonsContainer.appendChild(balloon);
  }

  // --- Cake SVG and Animation ---
  const cakeContainer = document.getElementById("cake-svg-container");

  // SVG content for the birthday cake
  const cakeSVG = `
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="150" height="150">
            <g id="cake-whole">
                <!-- Cake Base -->
                <rect x="30" y="100" width="140" height="60" rx="10" fill="#A0522D"/> <!-- Sienna Brown -->
                <!-- Icing -->
                <path d="M30,100 Q50,80 100,100 T170,100" fill="#F0F0F0" stroke="#D4AF37" stroke-width="2"/>
                <!-- Filling -->
                <rect x="30" y="120" width="140" height="10" fill="#FFD700"/> <!-- Gold Filling -->
                <!-- Candles -->
                <rect x="95" y="60" width="10" height="40" fill="#C0C0C0"/> <!-- Silver -->
                <path d="M100,60 Q105,50 100,40 Q95,50 100,60" fill="orange"/>
            </g>

        </svg>
    `;
});
