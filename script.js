let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Aggiungi un gestore di eventi al clic sull'icona del menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// Chiudi il menu quando si fa clic al di fuori di esso
document.addEventListener('click', (event) => {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickInsideMenuIcon = menuIcon.contains(event.target);
    if (!isClickInsideNavbar && !isClickInsideMenuIcon) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Funzione per gestire lo scroll della finestra
function handleWindowScroll() {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (id && top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Gestisci lo scroll della finestra quando si verifica
window.addEventListener('scroll', handleWindowScroll);

// Funzione per gestire il ridimensionamento della finestra
function handleWindowResize() {
    // Ricalcola la posizione delle sezioni quando si ridimensiona la finestra
    sections = document.querySelectorAll('section');
    navlinks = document.querySelectorAll('header nav a');
    handleWindowScroll(); // Richiama la funzione per gestire lo scroll della finestra
}

// Gestisci il ridimensionamento della finestra quando si verifica
window.addEventListener('resize', handleWindowResize);


