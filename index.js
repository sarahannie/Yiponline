document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    const nav = document.querySelector('nav');

    toggleBtn.addEventListener('click', function () {
        nav.classList.toggle('show'); 

        // Toggle the visibility of the hamburger and times icons
        const openIcon = toggleBtn.querySelector('.open');
        const closeIcon = toggleBtn.querySelector('.close');
        openIcon.classList.toggle('hide');
        closeIcon.classList.toggle('hide');
    });
});
