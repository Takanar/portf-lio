const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
let count = 0;

function handleKeyUp(event){
    if(event.keyCode === 32) {
        //32 igual espaço
        if(!isJumping){
            jump();
        }
    }
}

function jump(){
    isJumping = true;
    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);

            //descer
            let downInterval = setInterval(()=>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            },20);
        } else {
            //subir
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20)
}

function createCactus(){
    const cactus = document.createElement('div');
    let tamanhoTela = document.body.clientWidth;
    let cactusPosition = tamanhoTela;
    let randomTime = Math.random()*5000;
    if(randomTime < 1000){
        randomTime += randomTime;
    }

    cactus.classList.add('cactus');
    cactus.style.left = tamanhoTela+'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(()=>{
        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
            count++;
        } else if (cactusPosition > 0 && cactusPosition < 60 && position <60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<div class="game-over"><h1>Game Over</h1><input type="submit" value="recarregar" onclick="document.location.reload()"></input><p>Você pulou '+count+' dinos</p></div>'
        } else {
            cactusPosition -= 10
            cactus.style.left = cactusPosition+'px';
        }
    },20)
    setTimeout(createCactus, randomTime)
}
createCactus();
document.addEventListener('keyup', handleKeyUp)