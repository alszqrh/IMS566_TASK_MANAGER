// darkmode.js
(function() {
    // Apply dark mode immediately on page load (before page renders)
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
})();

// Toggle Dark Mode Function
function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('darkModeIcon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        if (icon) {
            icon.classList.remove('bi-moon-stars-fill');
            icon.classList.add('bi-sun-fill');
        }
        localStorage.setItem('darkMode', 'enabled');
    } else {
        if (icon) {
            icon.classList.remove('bi-sun-fill');
            icon.classList.add('bi-moon-stars-fill');
        }
        localStorage.setItem('darkMode', 'disabled');
    }
    
    // If charts exist, recreate them with new colors
    if (typeof createCharts === 'function') {
        createCharts();
    }
}

// Update icon on page load
document.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode');
    const icon = document.getElementById('darkModeIcon');
    
    if (darkMode === 'enabled' && icon) {
        icon.classList.remove('bi-moon-stars-fill');
        icon.classList.add('bi-sun-fill');
    }
});