var altura;
var largura;
var tempo = 0;
var posicaoX;
var posicaoY;
var contador = 60;
var vidas = 3;
var pontos = 1;
var totalPontos = 00;

function iniciarJogo(nivel) {
    ajustaTamanhoJogo();
    switch(nivel){
        case 'easy':
            tempo = 2000;
            jogo(tempo);
            break;
        case 'hard':
            tempo = 1500;
            jogo(tempo);
            break;
        case 'what?':
            tempo = 1000;
            jogo(tempo);
            break;
    }
}

function ajustaTamanhoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

function jogo(tempo){
    
    setInterval(function() {
        document.getElementById('contador').innerHTML = contador;
            if(contador > 0){
                contador -- ;
            } 
            else {
                window.location.href = "vitoria.html?" + totalPontos;
            }
    }, 1000);

    document.getElementById('pontuacao').style.visibility = "visible";
    

    setInterval(function() {

        if(document.getElementById('mosquito')){
            document.getElementById('mosquito').remove();
            
            if(vidas < 2){
                document.getElementById('coracao'+vidas).src = "img/coracao_vazio.png";
                vidas --;
                
                window.location.href = "derrota.html?" + totalPontos;
                
            } else {
                document.getElementById('coracao'+vidas).src = "img/coracao_vazio.png";
                vidas --;
            }
        }
        posicaoRandomica()
    }, tempo);
}

function posicaoRandomica(){
    
    posicaoX = Math.floor(Math.random() * largura) - 150;
    posicaoY = Math.floor(Math.random() * altura) - 150;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    var tela = document.querySelector('body');
    var mosquitos = document.createElement("img");
    mosquitos.id = "mosquito";
    mosquitos.src = "img/mosca.png";
    mosquitos.alt = "mosca";
    mosquitos.className = tamanhoAleatorio();
    mosquitos.className += " "+ladoAleatorio();
    mosquitos.style.left = posicaoX + "px";
    mosquitos.style.top = posicaoY + "px";
    mosquitos.style.position = "absolute";

    mosquitos.onclick = function() {
        totalPontos = document.getElementById('pontos').innerHTML = "Pontuação: "+pontos;
        pontos ++;
        this.remove();
    }
    tela.appendChild(mosquitos);
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random()*3);
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random()*2);
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

document.querySelector('body').addEventListener('resize', ajustaTamanhoJogo());