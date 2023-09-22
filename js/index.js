$(document).ready(function() {
// Inicializa el carrusel
    $('#miCarrusel').carousel();
});

fetch('../components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
    });
   

fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('fooder-container').innerHTML = data;
    });

