/*============================================================================
                                    Évelym S.
  ============================================================================*/

// Navigation
// Responsive Toggle Navigation =============================================
document.getElementById("overlay-menu").style.display = "none";
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
        document.getElementById("overlay-menu").style.display = "flex";
    } else {
        toggleIcon.className = 'menuIcon';
        document.getElementById("overlay-menu").style.display = "none";
    }
});