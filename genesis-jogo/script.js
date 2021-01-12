/* Jogo onde é apresentado uma tela com 4 cores ao usuário.
De acordo com o nível, o jogo indicará randômicamente uma ordem de cores
que o usuário deverá clicar.
Se o usuário clicar nas cores na ordem apresentada pelo jogo, ele vence
*/

let order = [];          //ordem apresentada pelo jogo
let clickedOrder = [];   //ordem de cliques do usuário
let score = 0;

//0 = verde 1 = vermelho 2 = amarelo 3 = azul
const verde = document.querySelector('.verde');
const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const azul = document.querySelector('.azul');

//cria cores de ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    //console.log(order) log das cores a serem clicadas
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, time) => {
    time = time * 500
    setTimeout(() => {
        element.classList.add('selected');
    },time-250);

    setTimeout(() => {
        element.classList.remove('selected')
    },time);
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`pontuação ${score}\n  Você acertou! Iniciando próximo nível!`)
        nextLevel();
    }
}

//captura os cliques do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    },250);
}

//cria o elemento para clicar
let createColorElement = (color) => {
    if(color == 0) {
        return verde;
    } else if(color == 1) {
        return vermelho;
    } else if(color == 2) {
        return amarelo;
    } else if(color == 3) {
        return azul;
    }
}

//função próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função display game over
let gameOver = () => {
    alert('Você perdeu');
    order = [];
    clickedOrder = [];
    playGame();
}

//função para iniciar o jogo
let playGame = () => {
    alert('Iniciando o jogo');
    score = 0;
    nextLevel();
}

//eventos de clique
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

//inicia o jogo
playGame();