const getComputerPlay = () => {
  let plays = ['rock', 'paper', 'scissors'];
  let play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}
export default getComputerPlay;