let jogador, vencedorFinal = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedor = document.getElementById('vencedor');
let quadrados = document.getElementsByClassName('quadrado');

mudarJogador(valor = 'X');

function escolherQuadrado(contexto){

    if(vencedorFinal !== null ){
        return;
    }

    if(contexto.innerHTML !== '-'){
        return;
    }
    contexto.innerHTML = jogador;
    contexto.style.color = "#000";

    if(jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador);
    checarVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor(){
    let quadrado1 = document.getElementById(1);
    let quadrado2 = document.getElementById(2);
    let quadrado3 = document.getElementById(3);
    let quadrado4 = document.getElementById(4);
    let quadrado5 = document.getElementById(5);
    let quadrado6 = document.getElementById(6);
    let quadrado7 = document.getElementById(7);
    let quadrado8 = document.getElementById(8);
    let quadrado9 = document.getElementById(9);

    if(checarSequencia(quadrado1, quadrado2, quadrado3)){
        mudarcorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado4, quadrado5, quadrado6)){
        mudarcorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if(checarSequencia(quadrado7, quadrado8, quadrado9)){
        mudarcorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if(checarSequencia(quadrado1, quadrado5, quadrado9)){
        mudarcorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado3, quadrado5, quadrado7)){
        mudarcorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
    if(checarSequencia(quadrado1, quadrado4, quadrado7)){
        mudarcorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado2, quadrado5, quadrado8)){
        mudarcorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if(checarSequencia(quadrado3, quadrado6, quadrado9)){
        mudarcorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
}

function mudarcorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = "green";
    quadrado2.style.background = "green";
    quadrado3.style.background = "green";
}

function mudarVencedor(quadrado){
    vencedorFinal = quadrado.innerHTML;
    vencedor.innerHTML = vencedorFinal;
}

function checarSequencia(quadrado1, quadrado2, quadrado3){
    let igual = false;
    if(quadrado1.innerHTML != '-' && quadrado1.innerHTML == quadrado2.innerHTML && quadrado2.innerHTML == quadrado3.innerHTML){
        igual = true;
    }  
    return igual;
}

function reiniciar(){
    vencedorFinal = null;
    vencedor.innerHTML = '';
    for(let i = 1; i <= 9; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background = "#eee";
        quadrado.style.color = "#eee";
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}