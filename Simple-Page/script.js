// Basic state management for mobile navigation
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Toggles the 'active' class to show/hide the menu on mobile devices
            navLinks.classList.toggle('active');
            
            // Updates ARIA attribute for Universal Access compliance
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
});