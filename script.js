'use strict';

// const message = document.querySelector('.message');

// console.dir(message);


// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.guess').value = 143;


let secretNumber = Math.floor(Math.random() * 5 + 1);

let score = document.querySelector('.score');

score.textContent = 10;

let highScore = document.querySelector('.highscore');

highScore.textContent = 0;


// console.log(score);

document.querySelector('.check').addEventListener('click', function () {

   

    // console.log(typeof(score.textContent))


    document.querySelector('.message').textContent = 'Game Started!';


    const guess = Number(document.querySelector('.guess').value);


    console.log("Guess: ", guess, ' Secret Number: ', secretNumber);

    if (document.querySelector('.message').textContent === 'Correct Number!') {
        return;
    }

    if(+score.textContent <= '1'){
        document.querySelector('.message').textContent = 'You Lose!!!!';
        score.textContent = 0;
        return;
    }

   

    if (!guess) {

        document.querySelector('.message').textContent = 'Please enter number between 1 to 5!';

    } else if (guess === secretNumber) {

        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.fontSize = '7rem';
        if (highScore.textContent < score.textContent) {
            highScore.textContent = score.textContent; 
        }
        // console.dir(document.querySelector('body'));

        document.querySelector('body').style.background = '#60b347';

        document.querySelector('.check').disabled = true;


    } else {

        document.querySelector('.message').textContent = 'Try again!';
        score.textContent--;
    }

});


document.querySelector('.again').addEventListener('click', function () {

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.background = '#222';
    document.querySelector('.number').textContent = '?';
    console.dir(document.querySelector('.number'));
    document.querySelector('.number').style.fontSize = '6rem';
    score.textContent = 10;

    // console.dir(document.querySelector('.check').disabled = true);
    document.querySelector('.check').disabled = false;

    secretNumber = Math.floor(Math.random() * 5 + 1);

});






