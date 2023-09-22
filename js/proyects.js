function ajustarAlturaIframe() {
    var iframe = parent.document.querySelector('#header-iframe');
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}
window.addEventListener('load', ajustarAlturaIframe);
window.addEventListener('resize', ajustarAlturaIframe);

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


$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
});
