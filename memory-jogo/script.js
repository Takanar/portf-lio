const cards = document.querySelectorAll('.card');
let hasFlippedCard, lockBoard = false;
let firstCard, secondCard;
let finish = 0;

function flipCard() {
    //this.classList.toggle('flip')  //adciona e tira resolvendo o problema do add e remove
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
}

function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        finish++;
        if(finish === 4){
            setTimeout(() => { 
                alert('Parabéns!!!');
                document.location.reload();
            },1000);
        }
        return;
    } else {
        unflipCards();
    }
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    },1000);
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random()*8);
        card.style.order = randomPosition; //define a posição das cartas aleatoriamente
    });
})();      //imediatelyInvokeFunction


cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});
