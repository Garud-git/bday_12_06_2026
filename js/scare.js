const video = document.getElementById("scareVideo");
const videoContainer = document.getElementById("videoContainer");
const bdayScreen = document.getElementById("bdayScreen");
const sparklesContainer = document.getElementById("sparkles");

// ── AUTOPLAY VIDEO ──
window.addEventListener("load", () => {
  video.play().catch(() => {
    // Autoplay blocked — show click-to-play overlay
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position:fixed;inset:0;display:flex;align-items:center;
      justify-content:center;background:rgba(0,0,0,0.92);z-index:20;
      cursor:pointer;flex-direction:column;gap:16px;
    `;
    overlay.innerHTML = `
      <div style="font-family:'Cinzel',serif;color:#c9a84c;font-size:18px;letter-spacing:0.2em;">▶ &nbsp; TAP TO REVEAL</div>
      <div style="font-family:'EB Garamond',serif;font-style:italic;color:rgba(232,223,200,0.5);font-size:13px;">Your fate awaits...</div>
    `;
    overlay.addEventListener("click", () => {
      video.play();
      overlay.remove();
    });
    document.body.appendChild(overlay);
  });
});

// ── ON VIDEO END → SHOW BIRTHDAY ──
video.addEventListener("ended", showBirthday);

function showBirthday() {
  videoContainer.classList.add("fade-out");
  generateSparkles();
  setTimeout(() => {
    videoContainer.style.display = "none";
    bdayScreen.classList.add("visible");
  }, 900);
}

// ── SPARKLES / CONFETTI ──
const SPARKLE_CHARS = ["🎉", "✨", "🎂", "⭐", "💛", "🌟", "✦", "🎊"];

function generateSparkles() {
  for (let i = 0; i < 50; i++) {
    const el = document.createElement("div");
    el.classList.add("sparkle");
    el.textContent = SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)];
    el.style.setProperty("--size", (14 + Math.random() * 20) + "px");
    el.style.setProperty("--dur", (4 + Math.random() * 6) + "s");
    el.style.setProperty("--delay", (Math.random() * 5) + "s");
    el.style.setProperty("--x", Math.random() * 100 + "vw");
    sparklesContainer.appendChild(el);
  }
}
