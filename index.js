
/* ********************************** */
/*           MENU RESPONSIVE          */
/* ********************************** */
let overlay = document.querySelector('#overlay');
let menuHamburger = document.querySelector('.menu-hamburger');
let menuResponsive = document.querySelector('.menu-responsive');
let menuClose = document.querySelector('.btn-close-responsive');

menuHamburger.addEventListener('click', () => {
	menuResponsive.classList.add('active');
	overlay.style.display = 'block';
	document.body.style.overflow = 'hidden'; // Bloquea el scroll
});

menuClose.addEventListener('click', () => {
	menuResponsive.classList.remove('active');
	overlay.style.display = 'none';
	document.body.style.overflow = 'auto'; // Desbloquea el scroll
});

// Actualiza el estado del botón de decrementar al cargar la página
updateButtonState();