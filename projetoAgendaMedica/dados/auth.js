var users = {login:'root', pass:'root'};
var retorno;
function buscarDados(login, pass){
    console.log('ok');
    if (login == users['login'] && pass == users['pass']) {
        retorno = 0;
    } else {
        retorno = 3;
    }
    return retorno;
}