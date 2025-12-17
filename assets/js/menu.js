document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.btn-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});
