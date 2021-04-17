// créer un tableau
const colors = ["blue", "pink" ,"Yellow","Black", "pink", "Maroon","Black", "Yellow","Purple", "Blue","Maroon", "Purple"];

let openedCards = [];

let allCards = document.getElementsByClassName("colorCard");

// random cards
  colors.sort(function (a, b) {
    return 0.5 - Math.random ()
  });
  

// fonction pour changer la couleur  au clique
for (let i = 0; i < allCards.length; i++){
 
    allCards[i].onclick = function(){
     allCards[i].style.backgroundColor = colors[i];
     openedCards.push(allCards[i]);
  }
  
}

