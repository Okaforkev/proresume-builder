// Inputs and Preview
const inputs = document.querySelectorAll("input, textarea");
const preview = document.getElementById("preview");
const downloadBtn = document.getElementById("download");
const pName = document.getElementById("pName");
const pRole = document.getElementById("pRole");
const pSummary = document.getElementById("pSummary");

let started = false;

// Theme controls
const toggleModeBtn = document.getElementById("toggleMode");
const randomThemeBtn = document.getElementById("randomTheme");
let darkMode = false;

// Start resume preview
function start() {
  if (!started) {
    preview.style.display = "block";
    downloadBtn.style.display = "block";
    started = true;
  }
  pName.textContent = document.getElementById("name").value;
  pRole.textContent = document.getElementById("role").value;
  pSummary.textContent = document.getElementById("summary").value;
}

inputs.forEach(input => input.addEventListener("input", start));

// Download PDF
downloadBtn.addEventListener("click", () => {
  html2pdf().from(preview).save("ProResume.pdf");
});

// Toggle Dark Mode
toggleModeBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("dark", darkMode);
  if (darkMode) {
    toggleModeBtn.textContent = "☀ Light Mode";
  } else {
    toggleModeBtn.textContent = "🌙 Dark Mode";
  }
  generateRandomPalette();
});

// Random Theme Generator
function generateRandomPalette() {
  const darkColors = [
    "#1a1a2e", "#162447", "#1f4068", "#1b1b2f", "#0f0f1a",
    "#2c2c54", "#3a3a60", "#222831", "#393e46", "#2e2e3e"
  ];
  const accentColors = [
    "#e94560", "#08d9d6", "#ff2e63", "#f9ed69", "#00adb5",
    "#f08a5d", "#b83b5e", "#6a2c70", "#c06c84", "#355c7d"
  ];

  const bg = darkColors[Math.floor(Math.random() * darkColors.length)];
  const accent = accentColors[Math.floor(Math.random() * accentColors.length)];
  const text = "#f5f5f5";
  const inputBg = "#222";

  document.documentElement.style.setProperty("--bg-color", bg);
  document.documentElement.style.setProperty("--accent-color", accent);
  document.documentElement.style.setProperty("--text-color", text);
  document.documentElement.style.setProperty("--secondary-color", "#aaa");
  document.documentElement.style.setProperty("--input-bg", inputBg);
  document.documentElement.style.setProperty("--input-text", text);
}

// Initialize
generateRandomPalette();
