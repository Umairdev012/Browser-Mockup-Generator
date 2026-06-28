// =========================
// Pomodoro Timer
// =========================

const timeEl = document.getElementById("time");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let totalSeconds = 25 * 60;
let timer = null;
let isRunning = false;

// =========================
// Format Time
// =========================

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// =========================
// Update UI
// =========================

function updateDisplay() {
    timeEl.textContent = formatTime(totalSeconds);
}

// =========================
// Start Timer
// =========================

startBtn.addEventListener("click", () => {

    if (isRunning) return;

    isRunning = true;

    timer = setInterval(() => {

        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isRunning = false;
            alert("Time's up! 🎉");
        }

    }, 1000);
});

// =========================
// Pause Timer
// =========================

pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
});

// =========================
// Reset Timer
// =========================

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = 25 * 60;
    updateDisplay();
});

// Initial display
updateDisplay();