function ajustarAlturaIframe() {
    var iframe = parent.document.querySelector('#header-iframe');
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
}
window.addEventListener('load', ajustarAlturaIframe);
window.addEventListener('resize', ajustarAlturaIframe);