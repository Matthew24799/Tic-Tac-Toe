function  gameboard(board) {
    const rows = 3;
    const cols = 3;
    board = []


        for (let i = 0; i < rows; i++) {
            board[i] = [];

            for (let j = 0; j < cols; j++) {
                board[i].push(cell());
            }
        }
        

        
    
    console.log(board)

   return board;
}


function cell() {
    let value = 0;

    const addMark = (player) => {
        value = player;
    };

    const getValue = () => value;

    return {
        addMark,
        getValue
    };
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


