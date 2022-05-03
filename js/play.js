import getComputerPlay from './computerPlay.js';

let humanScore = 0;
let draw = 0;
let computerScore = 0;
let round = 1;

document.querySelector('.reset').addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  draw = 0;
  round = 1;
  document.querySelector('.rock').removeAttribute('disabled');
  document.querySelector('.paper').removeAttribute('disabled');
  document.querySelector('.scissors').removeAttribute('disabled');
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  document.getElementById('draw').innerHTML = draw;
  document.getElementById('status').innerHTML = '';
})

const play = (humanPlay) => {
  let computerPlay = getComputerPlay();
  document.getElementById('status').innerHTML = 
  'Round:' + round + '<p>You played ' + humanPlay +'. The bot played ' + computerPlay + '.</p>';
  
  if(humanPlay === 'rock') {
    if(computerPlay === 'rock') {
      document.getElementById('status').innerHTML += '<p>You\'ve tied the round. :|</p>';
      draw++;
    } else if (computerPlay === 'paper') {
      document.getElementById('status').innerHTML += '<p>You\'ve lost the round. :(</p>';
      computerScore++;
    } else if (computerPlay === 'scissors') {
      document.getElementById('status').innerHTML += '<p>You\'ve won the round! :)</p>';
      humanScore++;
    }
  } else if (humanPlay === 'paper') {
    if(computerPlay === 'rock') {
      document.getElementById('status').innerHTML += '<p>You\'ve won the round! :)</p>';
      humanScore++;
    } else if (computerPlay === 'paper') {
      document.getElementById('status').innerHTML += '<p>You\'ve tied the round. :|</p>';
      draw++;
    } else if (computerPlay === 'scissors') {
      document.getElementById('status').innerHTML += '<p>You\'ve lost the round. :(</p>';
      computerScore++;
    }  
  } else if (humanPlay === 'scissors') {
    if(computerPlay === 'rock') {
      document.getElementById('status').innerHTML += '<p>You\'ve lost the round. :(</p>';
      computerScore++;
    } else if (computerPlay === 'paper') {
      document.getElementById('status').innerHTML += '<p>You\'ve won the round! :)</p>';
      humanScore++;
    } else if (computerPlay === 'scissors') {
      document.getElementById('status').innerHTML += '<p>You\'ve tied the round. :|</p>';
      draw++;
    }  
  }
  if(humanScore === 3 || computerScore === 3) {
    document.querySelector('.rock').setAttribute('disabled','');
    document.querySelector('.paper').setAttribute('disabled','');
    document.querySelector('.scissors').setAttribute('disabled','');
    if(humanScore === 3) {
      document.getElementById('status').innerHTML = '<p>YOU\'VE WON THE GAME!!. XD</p>';
      document.getElementById('status').innerHTML += '<p>If you wanna play one more time press \'RESET\' button</p>';
    } else if(computerScore === 3) {
      document.getElementById('status').innerHTML = "<p>YOU'VE LOST THE GAME. :|</p>";
      document.getElementById('status').innerHTML += '<p>If you wanna play one more time press \'RESET\' button</p>';
    }

  }
  
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  document.getElementById('draw').innerHTML = draw;
  round++;
}
export default play;