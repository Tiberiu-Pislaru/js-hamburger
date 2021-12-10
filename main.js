const open = document.querySelector('.fa-bars');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const close = document.querySelector('.close');
// let trackerClick= 0;

// console.log(hamburgerMenu);
open.addEventListener('click', function() {
    hamburgerMenu.classList.add("active");
    // console.log('ciao')
});

close.addEventListener('click', function() {
    hamburgerMenu.classList.remove("active");
    // console.log('ciao')
});

