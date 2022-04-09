//VARS
const all = document.querySelectorAll(".cell");
const main = document.querySelector(".game--container");
const gStatus = document.querySelector(".game--status");
const resetBtn = document.querySelector(".game--restart");
var turn = "X";
var game = true ;

//EVENTS

resetBtn.addEventListener("click" , restart)

if (game == true) {
  all.forEach(cell => {
  cell.addEventListener("click" , myclick)
});

}

turns();


//FUNK



function turns() {
  if (game == true) {
      gStatus.innerText = `${turn} Player turns!` ;
  }
}

var winner = ["","","","","","","","",""] ;


function myclick(e) {
  var s = e.target.getAttribute('data-cell-index');
  if (all[s].innerText == "X") {
    return;
  }
  if (all[s].innerText == "O") {
    return;
  }
  if (game == true) {
    all[s].innerText = turn ;
  }
  
  
 //WINER
  winner[s] = turn;
  console.log(winner);

  if (winner[0] == "X" && winner[0] === winner[1] && winner[1] === winner[2]) {
    gStatus.innerText = ` X Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[3] === "X" && winner[3] === winner[4] && winner[4] === winner[5]) {
    gStatus.innerText = ` X Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[6] === "X" && winner[6] === winner[7] && winner[7] === winner[8]) {
    gStatus.innerText = ` X Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[0] === "X" && winner[0] === winner[3] && winner[3] === winner[6]) {
    gStatus.innerText = ` X Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[1] === "X" && winner[1] === winner[4] && winner[4] === winner[7]) {
    gStatus.innerText = `X Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[2] === "X" && winner[2] === winner[5] && winner[5] === winner[8]) {
    gStatus.innerText = ` X Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[0] === "X" && winner[0] === winner[4] && winner[4] === winner[8]) {
    gStatus.innerText = ` X Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[2] === "X" && winner[2] === winner[4] && winner[4] === winner[6]) {
    gStatus.innerText = ` X Player Wins! ` ;
    game = false ;
    winner = [];
  }
  
  //----------------------------- O WINS !

  if (winner[0] == "O" && winner[0] == winner[1] && winner[1] == winner[2]) {
    gStatus.innerText = ` O Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[3] == "O" && winner[3] == winner[4] && winner[4] == winner[5]) {
    gStatus.innerText = ` O Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[6] == "O" && winner[6] == winner[7] && winner[7] == winner[8]) {
    gStatus.innerText = ` O Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[0] == "O" && winner[0] == winner[3] && winner[3] == winner[6]) {
    gStatus.innerText = ` O Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[1] == "O" && winner[1] == winner[4] && winner[4] == winner[7]) {
    gStatus.innerText = `O Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[2] == "O" && winner[2] == winner[5] && winner[5] == winner[8]) {
    gStatus.innerText = ` O Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[0] == "O" && winner[0] == winner[4] && winner[4] == winner[8]) {
    gStatus.innerText = ` O Player Wins! ` ;
    game = false ;
    winner = [];
  }
  if (winner[2] == "O" && winner[2] == winner[4] && winner[4] == winner[6]) {
    gStatus.innerText = ` O Player Wins! ` ;
    game = false ;
    winner = [];
  }


  //-------------------------------DRAW

  if (winner[1] === "X" || winner[1] === "O") {
    if (!winner.includes("")) {
    gStatus.innerText = ` End In Draw! ` ;
    game = false ;
    winner = [];
    }
  }

    
      

  




  // else
  // if (winner[3] && winner[4] && winner[5] === "X") {
  //   game = false ;
  //   gStatus.innerText = " X Player Wins! " ;

  // }else
  // if (winner[6] && winner[7] && winner[8] === "X") {
  //   game = false ;
  //   gStatus.innerText = " X Player Wins! " ;

  // }else
  // if (winner[0] && winner[3] && winner[6] === "X") {
  //   game = false ;
  //   gStatus.innerText = " X Player Wins! " ;

  // }else
  
  // if (winner[1] && winner[4] && winner[7] === "X") {
  //   game = false ;
  //   gStatus.innerText = " X Player Wins! " ;

  // }else
  
  // if (winner[2] && winner[5] && winner[8] === "X") {
  //   game = false ;
  //   gStatus.innerText = " X Player Wins! " ;

  // }else
  
  // if (winner[0] && winner[4] && winner[8] === "X") {
  //   game = false ;
  //   gStatus.innerText = " X Player Wins! " ;

  // }else
  
  // if (winner[6] && winner[4] && winner[2] === "X") {
  //   game = false ;
  //   gStatus.innerText = " X Player Wins! " ;

  // }

 //O wins 
 
// else if (winner[0] && winner[1] && winner[2] === "O") {
//   game = false ;
//   gStatus.innerText = " O Player Wins! " ;

// }else
// if (winner[3] && winner[4] && winner[5] === "O") {
//   game = false ;
//   gStatus.innerText = " O Player Wins! " ;

// }else
// if (winner[6] && winner[7] && winner[8] === "O") {
//   game = false ;
//   gStatus.innerText = " O Player Wins! " ;

// }else
// if (winner[0] && winner[3] && winner[6] === "O") {
//   game = false ;
//   gStatus.innerText = " O Player Wins! " ;

// }else

// if (winner[1] && winner[4] && winner[7] === "O") {
//   game = false ;
//   gStatus.innerText = " O Player Wins! " ;

// }else

// if (winner[2] && winner[5] && winner[8] === "O") {
//   game = false ;
//   gStatus.innerText = " O Player Wins! " ;

// }else

// if (winner[0] && winner[4] && winner[8] === "O") {
//   game = false ;
//   gStatus.innerText = " O Player Wins! " ;

// }else

// if (winner[6] && winner[4] && winner[2] === "O") {
//   game = false ;
//   gStatus.innerText = " O Player Wins! " ;

// }

  

  chnageTurn();
  turns();
  


}

function chnageTurn() {
  if (turn == "X") {
    turn = "O";
  }else{
    turn = "X";
  }
}

function restart() {
  for (let index = 0; index < 9; index++) {
     all[index].innerText = "";
     turn = "X"
     game = true;
     winner = ["","","","","","","","",""] ;
     gStatus.innerText = `${turn} Player turns!` ;
  }

 
}





