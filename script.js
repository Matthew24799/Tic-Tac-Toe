function  gameboard() {

   const board = [
    [0,0,0],
    [0,0,0],
    [0,0,0],

   ];

   const getBoard = () => board;

   const displayBoard = () => {

        for (let i = 0; i < board.length; i++) {
            console.log(board[i]);
        }
   }

   const dropMark = (row, col, player, mark) => {
  
        if (board[row][col] === "x")  return 0;
        if (board[row][col] === "o")  return 0; 


        board[row][col] = player;
       
   }

   
  

   return { getBoard, displayBoard, dropMark};
}


function gameFlow() {
    let board = gameboard();
    const click = document.querySelectorAll(".cell")
    const round = document.querySelector(".round")
    const restart = document.querySelector(".restart")

    restart.addEventListener("click", () => {
      
    })
    let players = [
        {
            name: "playerOne",
            mark: "x",
            color: "lightblue"
        },
        {
            name: "playerTwo",
            mark: "o",
            color: "lightcoral"
        }

    ]

    const p1 = document.querySelector(".p1Heading");
    p1.textContent = players[0].name;


    const p2 = document.querySelector(".p2Heading");
    p2.textContent = players[1].name;

    let activePlayer = players[0]

    const switchTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }

    
    function printNewRound() {
        board.displayBoard();
        console.log(`${getActivePlayer().name}'s turn`)
        round.textContent = `${getActivePlayer().name}'s turn`
    }



    
    click.forEach((click) => {
        click.addEventListener("click", () => {
         row = click.getAttribute("row");
         col = click.getAttribute("col");
         let mark = getActivePlayer().mark
         if(click.textContent == "") {
            click.textContent = mark;
            click.style.backgroundColor =getActivePlayer().color
         }
        
         playTurn(row,col);
 
          })
       })


       

    

    const getActivePlayer = () => activePlayer;


    const playTurn = (row, col) => {    

      let placement = board.dropMark(row,col,getActivePlayer().mark)
        
        if(placement===0) {
            console.log("cant place here");
            printNewRound();
            return
        }    

        function checkWin() {
             const check = board.getBoard()
             if (check[0][0] == getActivePlayer().mark && check[0][1] == getActivePlayer().mark && check[0][2] == getActivePlayer().mark) {
                console.log(`${getActivePlayer().name} Wins`);
                return true
             } else if (check[1][0] == getActivePlayer().mark && check[1][1] == getActivePlayer().mark && check[1][2] == getActivePlayer().mark) {
                console.log(`${getActivePlayer().name} Wins`);
                return true
             } else if (check[2][0] == getActivePlayer().mark && check[2][1] == getActivePlayer().mark && check[2][2] == getActivePlayer().mark) {
                console.log(`${getActivePlayer().name} Wins`);
                return true
             } else if (check[0][0] == getActivePlayer().mark && check[1][1] == getActivePlayer().mark && check[2][2] == getActivePlayer().mark) {
                console.log(`${getActivePlayer().name} Wins`);
                return true 
             } else  if (check[0][2] == getActivePlayer().mark && check[1][1] == getActivePlayer().mark && check[2][0] == getActivePlayer().mark) {
                console.log(`${getActivePlayer().name} Wins`);
                return true
             } else if (check[0][0] == getActivePlayer().mark && check[1][0] == getActivePlayer().mark && check[2][0] == getActivePlayer().mark) {
                console.log(`${getActivePlayer().name} Wins`);
                return true
             } else if (check[0][2] == getActivePlayer().mark && check[1][2] == getActivePlayer().mark &&  check[2][2] == getActivePlayer().mark) {
                console.log(`${getActivePlayer().name} Wins`);
                return true

             } else if (check[0][1] == getActivePlayer().mark && check[1][1] == getActivePlayer().mark &&  check[2][1] == getActivePlayer().mark) {
                console.log(`${getActivePlayer().name} Wins`);
                return true

             }
             
             else return
        }

        checkWin();
        
        if(checkWin() == true) {
            board.displayBoard();
            round.textContent = `${getActivePlayer().name}'s WINS`
            round.style.backgroundColor = getActivePlayer().color
            return;
        }
            const tie = () => {
                const check = board.getBoard();
                if (check[0][0] && check[0][1] && check[0][2] && check[1][0] && check[1][1] && check[1][2] && check[2][0] && check[2][1] && check[2][2])  return true;
                    return false
            }

            tie();

            if(tie()) {
                console.log("TIE")
                round.textContent = "TIE"
                return
            };

        switchTurn();
        printNewRound();
    };

    printNewRound();

   
    return { 
        playTurn,
        getActivePlayer
    };
}

const game = gameFlow();


