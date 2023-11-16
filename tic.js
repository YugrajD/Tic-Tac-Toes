const placeX = 'X';
const placeO = 'O';
let playerScore = 0;
let computerScore = 0;

let currentPlayer = 1; // 1 is for player one

function placePiece(box) {
    if(!box.innerHTML) {
        box.innerHTML = currentPlayer === 1 ? 'X' : 'O';
        currentPlayer = 3 - currentPlayer;
    }

    
}


const gameBoard = [
    'X', 'O', 'X',
    'O', 'X', 'O',
    'X', 'O', 'X'
];

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

function checkForWinX() {
    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] === 'X' && gameBoard[b] === 'X' && gameBoard[c] === 'X') {
            return true;
        }
}
}

function checkForWinO() {
    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] === 'O' && gameBoard[b] === 'O' && gameBoard[c] === 'O') {
            return true;
        }
}
}

function updatePlayerScore() {
    playerScore += 1;

    const playerScoreElement = document.getElementById('playerScore');

    playerScoreElement.innerHTML = playerScore.toString();
}

function resetBoard() {
    const tacboxes = document.querySelectorAll('.tacbox');
    tacboxes.forEach(box => {
        box.innerHTML = '';
    });

    gameBoard.fill('');

    currentPlayer = 1;
}