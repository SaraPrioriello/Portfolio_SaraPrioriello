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

const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `Full name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "s.prioriello96@gmail.com",
        Password : "BBB55BA994C29C88634B3F7B23DF804CF5F4",
        To : 's.prioriello96@gmail.com',
        From : "s.prioriello96@gmail.com",
        Subject : subject.value, 
        Body : bodyMessage
    }).then(
      message => {
        if (message === "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message sent succesfully",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    let isValid = true; // Imposta la validità iniziale a true

    const items = document.querySelectorAll('.item');

    for (const item of items) {
        if (item.value == "") {
            item.classList.add('error');
            item.parentElement.classList.add('error');
            isValid = false; // Imposta isValid a false se almeno un campo non è compilato
        } else {
            item.classList.remove('error');
            item.parentElement.classList.remove('error');
        }

        item.addEventListener('input', () => { // Usa l'evento 'input' per gestire i cambiamenti in tempo reale
            if (item.value != "") { 
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            } else {
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        });
    }

    return isValid; // Restituisce il valore booleano che indica se tutti i campi sono stati compilati correttamente
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (checkInputs()) { // Invia l'email solo se tutti i campi sono compilati correttamente
        sendEmail();
    } else {
        // Aggiungi qui la logica per gestire l'errore o visualizzare un messaggio all'utente
        console.log('Completa tutti i campi correttamente prima di inviare l\'email.');
    }
});

function checkInputs() {
    let isValid = true;
    const items = document.querySelectorAll('.item');

    for (const item of items) {
        const errorText = item.parentElement.querySelector('.error-text');
        if (item.value == "") {
            errorText.style.display = 'block'; // Mostra il messaggio di errore
            item.parentElement.classList.add('error'); // Aggiungi la classe error al campo
            isValid = false;
        } else {
            errorText.style.display = 'none'; // Nascondi il messaggio di errore se il campo non è vuoto
            item.parentElement.classList.remove('error'); // Rimuovi la classe error se il campo è compilato
        }

        item.addEventListener('input', () => {
            if (item.value != "") { 
                errorText.style.display = 'none'; // Nascondi il messaggio di errore quando il campo viene compilato
                item.parentElement.classList.remove('error'); // Rimuovi la classe error se il campo è compilato
            } else {
                errorText.style.display = 'block'; // Mostra il messaggio di errore se il campo è vuoto
                item.parentElement.classList.add('error'); // Aggiungi la classe error al campo
            }
        });
    }

    return isValid;
}

