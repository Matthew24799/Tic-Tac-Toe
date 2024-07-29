function  gameboard() {

   const board = [
    [0,0,0],
    [0,0,0],
    [0,0,0],

   ];


    console.log(board)

   return board;
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
    
}

const game = gameboard();


