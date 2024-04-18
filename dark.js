// Function to toggle between dark mode and light mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const modeButton = document.getElementById('mode-toggle');
    if (body.classList.contains('dark-mode')) {
        modeButton.textContent = 'Light Mode';
    } else {
        modeButton.textContent = 'Dark Mode';
    }
}

// Event listener for mode toggle button
document.getElementById('mode-toggle').addEventListener('click', toggleDarkMode);
