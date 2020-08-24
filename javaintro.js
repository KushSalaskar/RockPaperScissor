var userCount = 0;
var computerCount = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function convertToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";

}


function win(user, computer){
  userCount++;
  userScore_span.innerHTML = userCount;
  computerScore_span.innerHTML = computerCount;
  const smallUser = "User".fontsize(3).sub();
  const smallComp = "Comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(user)}${smallUser}  beats  ${convertToWord(computer)}${smallComp}  . You Win!`;
  document.getElementById(user).classList.add('green-glow');
  setTimeout(()=>{document.getElementById(user).classList.remove('green-glow')},500);
}

function lose(user, computer){
  computerCount++;
  userScore_span.innerHTML = userCount;
  computerScore_span.innerHTML = computerCount;
  const smallUser = "User".fontsize(3).sub();
  const smallComp = "Comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUser}  loses to  ${convertToWord(computer)}${smallComp}  . You Lose!`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(()=>{document.getElementById(user).classList.remove('red-glow')},500);
}

function draw(user, computer){
  userScore_span.innerHTML = userCount;
  computerScore_span.innerHTML = computerCount;
  const smallUser = "User".fontsize(3).sub();
  const smallComp = "Comp".fontsize(3).sub();
  result_div.innerHTML = `${convertToWord(user)}${smallUser}  is the same as  ${convertToWord(computer)}${smallComp}  . Tied!`;
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(()=>{document.getElementById(user).classList.remove('gray-glow')},500);
}

function getComputerChoice(){
  const choices = ['r' , 'p' , 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
     lose(userChoice, computerChoice);
     break;
    case "ss":
    case "rr":
    case "pp":
     draw(userChoice, computerChoice);
     break;
  }
}

function main(){
 rock_div.addEventListener('click',function() {
   game("r");
 })

 paper_div.addEventListener('click',function() {
   game("p");
 })

 scissors_div.addEventListener('click',function() {
   game("s");
 })
}

main();
