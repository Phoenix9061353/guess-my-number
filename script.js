'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (content) {
  document.querySelector('.number').textContent = content;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const playGame = () => {
  const guess = Number(document.querySelector('.guess').value);
  //When there's no input
  if (!guess) {
    displayMessage('⛔️ No number!');
  }
  //when the answer is correct
  else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎖 Correct number!');
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  //When the number is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⬇︎ Too high!' : '⬆︎ Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💀 You lose the game!');
      displayScore(0);
    }
  }
};

document.querySelector('.check').addEventListener('click', playGame);
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
