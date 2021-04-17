// Declare variables 
const colors = ["blue", "pink" ,"Yellow","Black", "pink", "Maroon","Black", "Yellow","Purple", "Blue","Maroon", "Purple"];
let openedCards = [];
let allCards = document.getElementsByClassName("colorCard");
let score = document.getElementById("score");
score = 0;

// random cards
colors.sort(function (a, b) {
  return 0.5 - Math.random ()
});


