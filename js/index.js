import '../scss/header.scss';
import '../scss/main.scss';
import play from './play.js'
document.querySelector('.rock').addEventListener('click', function() {
  play('rock');
});
document.querySelector('.paper').addEventListener('click', function() {
  play('paper');
});
document.querySelector('.scissors').addEventListener('click', function() {
  play('scissors');
});




