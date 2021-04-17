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
  }
  
}

function cardOpen() {
  openedCards.push(this);
  let len = openedCards.length;
  if(len === 2){
      moveCounter();
      if(openedCards[0].type === openedCards[1].type){
          matched();
      } else {
          unmatched();
      }
      
  }
};

function matched(){
  openedCards[0].classList.add("match", "disabled");
  openedCards[1].classList.add("match", "disabled");
  openedCards[0].classList.remove("show", "open", "no-event");
  openedCards[1].classList.remove("show", "open", "no-event");
  openedCards = [];
}

function unmatched(){
  openedCards[0].classList.add("unmatched");
  openedCards[1].classList.add("unmatched");
  disable();
  // setTimeout(function(){
  //     openedCards[0].classList.remove("show", "open", "no-event","unmatched");
  //     openedCards[1].classList.remove("show", "open", "no-event","unmatched");
  //     enable();
  //     openedCards = [];
  // },1100);
}