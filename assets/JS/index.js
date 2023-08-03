const menuIcon = document.querySelector('.menu');
const navMenu = document.querySelector('aside');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

let elementsArray = document.querySelectorAll(".section_wrapper");
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}