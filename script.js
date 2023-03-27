'use strict';
// console.log( document.querySelector(".message").innerHTML);
// document.querySelector(".message").textContent = "🎉 Currect number";

// document.querySelector(".score").textContent = 5;
// document.querySelector(".number").textContent =111;
// document.querySelector('.guess').value = 4;
// console.log( document.querySelector(".guess").value);

let secreteNumber = Math.trunc((Math.random()*20)+1);
console.log(secreteNumber);
let score = 20;
let highScore =0;
const displayMessage = function(message){
  document.querySelector(".message").textContent = message;
}
document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor= "#222";
  displayMessage("Start guessing...");
  // document.querySelector(".message").textContent = "Start guessing...";
  secreteNumber = Math.trunc((Math.random()*20)+1); 
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value="";
  document.querySelector('.number').style.width = '15rem';
  console.log(secreteNumber);

});
document.querySelector('.check').addEventListener("click",function(){
  let guess = Number (document.querySelector('.guess').value);
  if(!guess){
    // document.querySelector(".message").textContent = "no number!!!";
    displayMessage("no number!!!");

  }else {
    if (score===0){
      // document.querySelector(".message").textContent = "💥 you lose";
      displayMessage("💥 you lose");
      document.querySelector("body").style.backgroundColor = 'red';
      
    }
     else if (guess === secreteNumber){
      // document.querySelector(".message").textContent = "🎉 you win";
      displayMessage("🎉 you win");
      document.querySelector("body").style.backgroundColor = 'green';
      document.querySelector('.number').textContent = secreteNumber;
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent= highScore;
      }

    }else if(guess !== secreteNumber){
      displayMessage(guess>secreteNumber? "🚅 too high!":"🚅 too low!");
      score--;
      document.querySelector('.score').textContent = score;
    //   document.querySelector('.message').textContent = "🚅 too high!";
    // } else if(guess<secreteNumber){
    //   document.querySelector('.message').textContent = "🚅 too low!";
    //   score--;
    //   document.querySelector('.score').textContent = score;
    }
  }
});