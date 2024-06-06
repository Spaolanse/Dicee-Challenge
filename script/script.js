const numOne = Math.floor(Math.random() * 6 + 1);
const numTwo = Math.floor(Math.random() * 6 + 1);
const diceOne = document.getElementById('img1');
const diceTwo = document.getElementById('img2');
const winner = document.getElementById('winner');

    if(numOne > numTwo) {
        winner.innerText = '🚩 Player 1 Wins!';
    } else if (numTwo > numOne){
        winner.innerText = 'Player 2 Wins! 🚩';
    } else {
        winner.innerText = 'Draw!';
    }

    if(numOne >= 1 && numOne < 7){
        diceOne.src = `images/dice${numOne}.png`;
    };

    if(numTwo >= 1 && numTwo < 7){
        diceTwo.src = `images/dice${numTwo}.png`;
    };