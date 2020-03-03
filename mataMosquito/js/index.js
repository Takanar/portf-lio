document.getElementById('iniciar').addEventListener('click', function(){
    var select = document.querySelector('select');
    switch (select.selectedIndex) {

        case 0:
            var logo = document.getElementById('logo');
            logo.parentNode.removeChild(logo);
            iniciarJogo('easy');
            break;
        case 1:
            var logo = document.getElementById('logo');
            logo.parentNode.removeChild(logo);
            iniciarJogo('hard');
            break;
        case 2:
            var logo = document.getElementById('logo');
            logo.parentNode.removeChild(logo);
            iniciarJogo('what?');
            break;
    }
})