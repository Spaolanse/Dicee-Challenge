/*

onload
num 1 random
num 2 random

function 
if num 1 === 1 img src dice1.png
if num 2 === 3 img src dice2.png

function*****

if num 1 > num 2 
print player 1 wins
else print player 2 wins


*/


const numOne = Math.floor(Math.random() * 6 + 1);
const numTwo = Math.floor(Math.random() * 6 + 1);
const diceOne = document.getElementById('img1');
const diceTwo = document.getElementById('img2');
const winner = document.getElementById('winner');
console.log(numOne);
console.log(numTwo);

    if(numOne > numTwo) {
        winner.innerText = '🚩 Player 1 Wins!';
    } else if (numTwo > numOne){
        winner.innerText = 'Player 2 Wins! 🚩';
    } else {
        winner.innerText = 'Draw!';
    }

    if (numOne === 1) {
        diceOne.src = 'images/dice1.png';
    } else if (numOne === 2){
        diceOne.src = 'images/dice2.png';
    } else if (numOne === 3){
        diceOne.src = 'images/dice3.png';
    } else if (numOne === 4){
        diceOne.src = 'images/dice4.png';
    } else if (numOne === 5){
        diceOne.src = 'images/dice5.png';
    } else {
        diceOne.src = 'images/dice6.png';
    }


    if(numTwo === 1) {
        diceTwo.src = 'images/dice1.png';
    } else if(numTwo === 2){
        diceTwo.src = 'images/dice2.png';
    } else if(numTwo === 3){
        diceTwo.src = 'images/dice3.png';
    }else if(numTwo === 4){
        diceTwo.src = 'images/dice4.png';
    }else if(numTwo === 5){
        diceTwo.src = 'images/dice5.png';
    }else {
        diceTwo.src = 'images/dice6.png';
    }