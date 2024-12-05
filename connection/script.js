/* Capturar el botón principal y el contenedor de botones de redes sociales
const mainButton = document.getElementById('main-button');
const socialButtons = document.getElementById('social-buttons');

// Agregar evento de clic al botón principal
mainButton.addEventListener('click', () => {
    // Alternar visibilidad de los botones de redes sociales
    if (socialButtons.style.display === 'none' || socialButtons.style.display === '') {
        socialButtons.style.display = 'block';
        mainButton.textContent = 'Ocultar Redes Sociales';
    } else {
        socialButtons.style.display = 'none';
        mainButton.textContent = 'Mostrar Redes Sociales';
    }
});
*/