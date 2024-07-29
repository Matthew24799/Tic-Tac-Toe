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

    console.log(activePlayer);
}

const game = gameLogic();


