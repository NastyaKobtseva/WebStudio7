// Mobile version
const iconMenu = document.querySelector('.burger-menu');
if (iconMenu) {
    const menuBody = document.querySelector('.header__content-top');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}