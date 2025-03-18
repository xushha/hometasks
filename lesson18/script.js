document.getElementById("startTimer").addEventListener("click", function () {
    let totalTime = 85; // Начальное время в секундах (1 мин 25 сек)
    const timerDisplay = document.getElementById("timer");

    function updateTimerDisplay() {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    const timerInterval = setInterval(() => {
        if (totalTime > 0) {
            totalTime--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            timerDisplay.textContent = "00:00";
        }
    }, 1000);

    updateTimerDisplay();
});
