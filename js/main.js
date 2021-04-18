// Declare variables 
const colors = ["blue", "pink" ,"green","Black", "pink", "Maroon","Black", "green","Purple", "Blue","Maroon", "Purple"];
let openedCards = [];
let allCards = document.getElementsByClassName("colorCard");
let resultScore = document.getElementById("score");
score = 0;

// Random cards
colors.sort(function (a, b) {
  return 0.5 - Math.random ()
});

// functions
// Reset cardes not mached 
function resetClick(){
  if(openedCards.length > 2 ) {
      //remet le click sur l'élément 
      openedCards[0].style.pointerEvents = "auto";
      openedCards[0].style.backgroundColor = "#DBA901";
      openedCards[1].style.backgroundColor = "#DBA901";
      openedCards[2].style.backgroundColor = "#DBA901";
      openedCards = [];
  }  
}

// add opened cards to OpenedCards list and check if cards are match or not
function compare(){
  if (window.getComputedStyle(openedCards[0],null).getPropertyValue("background") === window.getComputedStyle(openedCards[1],null).getPropertyValue("background")) {        
      score ++;
      resultScore.innerText = "Score = " + score; 
      endGame();      
  }
  else {
      openedCards[0].style.background = "#DBA901";
      openedCards[1].style.background = "#DBA901";

  }
  openedCards[0].style.pointerEvents = "auto";
  openedCards = [];
}

// If score equal 6
function endGame(){
  if (score === 6){
    alert("Bravo vous avez gagné");
  }
}

// logic code
// Loop to change the color of cards on click
for (let i = 0; i < allCards.length; i++){
  allCards[i].onclick = function(){
    allCards[i].style.backgroundColor = colors[i];
    openedCards.push(allCards[i]);
    openedCards[0].style.pointerEvents = "none";
    resetClick();
    setTimeout(function(){ 
      if(openedCards.length === 2 )
     {
      compare();               
     }
    }, 1300);  
  }
}





