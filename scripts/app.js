// Set the initial time
let totalSeconds = (3 * 24 * 60 * 60) + (23 * 60 * 60) + (19 * 60) + 56;

// Function to update the timer
function updateTimer() {
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  // Update the DOM elements
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

  // Stop the timer if time is up
  if (totalSeconds > 0) {
    totalSeconds--;
  }
}

// Call updateTimer every second
setInterval(updateTimer, 1000);

// Initialize the timer display
updateTimer();
