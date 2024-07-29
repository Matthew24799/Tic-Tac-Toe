function  gameboard(board) {
    board = [    
     [0,0,0],   
       [0,0,0],    
       [0,0,0]  
    ];
        
   return board;
}

function gameLogic() {
    let board = gameboard();


    let players = [
        {
            player: "playerOne",
            mark: 1
        },
        {
            player: "playerTwo",
            mark: 2
        }

    ]

    let activePlayer = players[0]

    const switchTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }
    switchTurn();
    console.log(activePlayer);
    
    console.log(activePlayer)
    switchTurn()
}

const game = gameLogic();


