
var Board = (
    function () {
        let board = [];

        function getBoard() {
            return board;
        }

        function init() {
            for (let i=0; i <=2; i++) {
                board[i] = [];
                for (let j=0; j<=2; j++) {
                    board[i][j] = null;
                }
            }
        }


        function markPosition (player, row, col) {
            if (player !== 'A' && player !== 'B' ) return false;
            if (row < 0 || row > 2 || !Number.isInteger(row) ) return false;
            if (row < 0 || row > 2 || !Number.isInteger(row) ) return false;

            if (board[row][col] === 'A'|| board[row][col] === 'B') return false;
            
            board[row][col] = player;
            return true;
        }


        function winner() {
            // Check diagonals
            if (board[0][0] == 'A' || board[0][0] == 'B') {
                if (board[0][0] == board[1][1] && board[1][1] == board[2][2])
                    return board[0][0];
                if (board[2][0] == board[1][1] && board[1][1] == board[0][2])
                    return board[2][0];
            }

            // Check rows
            for (let row = 0; row <= 2; row++) {
                if (board[row][0] == 'A' || board[row][0] == 'B') {
                    if (board[row][0] == board[row][1] && board[row][1] == board[row][2])
                        return board[row][0];
                }
            }

            // Check columns
            for (let col = 0; col <= 2; col++) {
                if (board[0][col] == 'A' || board[0][col] == 'B') {
                    if (board[0][col] == board[1][col] && board[1][col] == board[2][col])
                        return board[0][col];
                }
            }

            // Got that far? No winner
            return null;
        }

        return {init, getBoard, markPosition, winner};
    }
)();