document.addEventListener("DOMContentLoaded", function() {
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(element => {
        element.classList.add('visible');
    });
});
