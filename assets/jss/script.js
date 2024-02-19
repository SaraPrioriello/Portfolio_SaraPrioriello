let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//remove toggle icon and navbar when click// 

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// Chiudi il menu quando si fa clic al di fuori di esso
document.addEventListener('click', (event) => {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickInsideMenuIcon = menuIcon.contains(event.target);
    if (!isClickInsideNavbar && !isClickInsideMenuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});