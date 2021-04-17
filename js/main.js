// Declare variables 
const colors = ["blue", "pink" ,"Yellow","Black", "pink", "Maroon","Black", "Yellow","Purple", "Blue","Maroon", "Purple"];
let openedCards = [];
let allCards = document.getElementsByClassName("colorCard");
let score = document.getElementById("score");
score = 0;

// Random cards
colors.sort(function (a, b) {
  return 0.5 - Math.random ()
});

// Loop to change the color of cards on click
for (let i = 0; i < allCards.length; i++){
  allCards[i].onclick = function(){
   allCards[i].style.backgroundColor = colors[i];
   openedCards.push(allCards[i]);
  }
}


