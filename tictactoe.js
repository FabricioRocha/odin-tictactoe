
var Board = (
    function () {
        let board = [];
        let marked = 0;

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
            marked = 0;
            return;
        }


        function markPosition (player, row, col) {
            // Some parameters checking
            if (player !== 'A' && player !== 'B' ) return false;
            if (row < 0 || row > 2 || !Number.isInteger(row) ) return false;
            if (col < 0 || col > 2 || !Number.isInteger(col) ) return false;

            // Reject a mark where there is already one
            if (board[row][col] != null) return false;
            
            board[row][col] = player;
            marked++;
            return true;
        }


        function winner() {
            
            // Check diagonals
            if (board[0][0] != null || board[2][0] !=null) {
                if (board[0][0] == board[1][1] && board[1][1] == board[2][2])
                    return board[0][0];
                if (board[2][0] == board[1][1] && board[1][1] == board[0][2])
                    return board[2][0];
            }

            // Check rows
            for (let row = 0; row <= 2; row++) {
                if (board[row][0] != null) {
                    if (board[row][0] == board[row][1] && board[row][1] == board[row][2])
                        return board[row][0];
                }
            }

            // Check columns
            for (let col = 0; col <= 2; col++) {
                if (board[0][col] != null) {
                    if (board[0][col] == board[1][col] && board[1][col] == board[2][col])
                        return board[0][col];
                }
            }

            // All positions taken and no winner? We have a tie
            if (marked == 9) return 'D';

            // Got that far? No winner, no draw
            return null;
        }

        return {init, getBoard, markPosition, winner};
    }
)();


/*
    What's missing

    Gameplay:
        - Player turn control
            - Who starts


        - Score control
            - Limit for game over (match win)
        
        - Computer as player B

        - Game start
    
    Idle mode (color cycling)

*/

var Game = (
    function (BoardMod) {
        const GAME_SETS = 10;
        let roundNo = 0;
        let score = {'A': 0, 'B': 0};
        let humanPlayerB = false;
        let turnPlayer = 'A';
        
        function start () {
            roundNo = 0;
            score.A = 0;
            score.B = 0;
            turnPlayer = (Math.random() < 0.5) ? 'A' : 'B';
            Screen_StartDisable();
            BoardMod.init();
            
        }

        function getScore() {
            return score;
        }

        function getHumanPlayerB () {
            return humanPlayerB;
        }

        function getTurnPlayer() {
            return turnPlayer;
        }

        function playerSwitch () {
            if (turnPlayer == 'A') turnPlayer = 'B'
                else turnPlayer = 'A';
            return;
        }

        function checkResults () {
            let roundWinner = BoardMod.winner();
            
            if (roundWinner !== null) {
                if (roundWinner == 'A' | roundWinner == 'B') score[roundWinner]++;
                roundNo++;
                if (roundNo == GAME_SETS) {
                    return "GAME";
                } else {
                    BoardMod.init();
                    return "ROUND";
                }
            }

            playerSwitch();
            return null;
            
        }    


        return {playerSwitch, getTurnPlayer, getHumanPlayerB, getScore, checkResults, start};
    }
)(Board);