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

   const dropMark = (row, col, player) => {

        
        if (board[row][col] === 1)  return 0;
        if (board[row][col] === 2)  return 0; 
        


        board[row][col] = player
           
      
   }

   
  

   return { getBoard, displayBoard, dropMark};
}


function gameFlow() {
    const board = gameboard();


    let players = [
        {
            name: "playerOne",
            mark: 1
        },
        {
            name: "playerTwo",
            mark: 2
        }

    ]

    let activePlayer = players[0]

    const switchTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }
    
    function printNewRound() {
        board.displayBoard();
        console.log(`${getActivePlayer().name}'s turn`)

    }


    const getActivePlayer = () => activePlayer

    const playTurn = (row, col) => {


      let placement = board.dropMark(row,col,getActivePlayer().mark)

        if(placement===0) {
            console.log("cant place here");
            printNewRound();
            return
        }    



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


