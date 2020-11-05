'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='🎊 Correct Answer';
document.querySelector('.number').textContent='23';
document.querySelector('.guess').value= 24;
*/
var sectretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.again').addEventListener('click', function () {
  sectretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = ' Start Guessing';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔ No Number';
  } else if (guess === sectretNumber) {
    document.querySelector('.message').textContent = ' 🎉 Correct number';
    document.querySelector('.number').textContent = sectretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > sectretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '👆 Number is too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You loose the game';
      document.querySelector('.number').textContent = sectretNumber;
      score--;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  } else if (guess < sectretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '👇 Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You loose the game';
      document.querySelector('.number').textContent = sectretNumber;
      score--;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});
