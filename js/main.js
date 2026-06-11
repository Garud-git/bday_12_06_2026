// ── PASSWORD ──
const CORRECT_PASSWORD = "S-H-A-R-M-I-L-I";

function checkPassword() {
  const input = document.getElementById("passwordInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");
  const card = document.getElementById("loginCard");

  if (input === CORRECT_PASSWORD) {
    // Success — brief flash then redirect
    card.style.transition = "opacity 0.6s, transform 0.6s";
    card.style.opacity = "0";
    card.style.transform = "scale(1.08)";
    setTimeout(() => {
      window.location.href = "scare.html";
    }, 700);
  } else {
    // Wrong — shake and show error
    errorMsg.classList.add("visible");
    card.classList.remove("shake");
    void card.offsetWidth; // reflow to retrigger
    card.classList.add("shake");
    setTimeout(() => card.classList.remove("shake"), 500);
    setTimeout(() => errorMsg.classList.remove("visible"), 2500);
  }
}

// Allow Enter key
document.getElementById("passwordInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") checkPassword();
});

// ── PARTICLES ──
const container = document.getElementById("particles");
const PARTICLE_COUNT = 38;
const SYMBOLS = ["✦", "✧", "·", "★", "⁕", "∗"];

for (let i = 0; i < PARTICLE_COUNT; i++) {
  const el = document.createElement("div");
  el.classList.add("particle");

  // Random symbol or dot
  if (Math.random() > 0.6) {
    el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
    el.style.width = "auto";
    el.style.height = "auto";
    el.style.background = "none";
    el.style.fontSize = (8 + Math.random() * 8) + "px";
    el.style.color = `rgba(201,168,76,${0.3 + Math.random() * 0.5})`;
    el.style.borderRadius = "0";
  }

  el.style.left = Math.random() * 100 + "vw";
  el.style.top = Math.random() * 100 + "vh";
  el.style.setProperty("--dur", (6 + Math.random() * 12) + "s");
  el.style.setProperty("--delay", (Math.random() * 10) + "s");
  container.appendChild(el);
}
