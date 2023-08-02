const menuIcon = document.querySelector('.menu');
const navMenu = document.querySelector('aside');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});