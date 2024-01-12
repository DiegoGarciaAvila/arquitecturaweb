
fetch('../components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;

        const event = new Event('headerLoaded');
        window.dispatchEvent(event);
    });

fetch('../components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    });

fetch('../proyects/proyect1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('proyecto1').innerHTML = data;
    });

fetch('../proyects/proyect2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('proyecto2').innerHTML = data;
    });

    fetch('../proyects/proyect3.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('proyecto3').innerHTML = data;
    });

fetch('../proyects/proyect4.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('proyecto4').innerHTML = data;
    });
fetch('../proyects/proyect5.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('proyecto5').innerHTML = data;
    });

    document.addEventListener("DOMContentLoaded", function () {
        new SmoothScroll('.scroll', {
            speed: 2000, // Velocidad del desplazamiento (ajusta según sea necesario)
            offset: 0, // Puedes ajustar un offset si es necesario
            speedAsDuration: true, // Habilita el desplazamiento suave como una duración de tiempo
        });
    });



