let appearanceOrder = 0;
let matrixGame = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function resetGame() {
    window.location.reload();
}

function showWiner(text) {
    let massage = document.getElementById("message");
    let newGame = document.getElementById("newGame");
    let newGameBtn = document.createElement("button");
    newGameBtn.textContent = "New Game";
    newGameBtn.id = "btnNewGame";
    newGameBtn.addEventListener('click', function() {
        resetGame();
   });
   if (!document.getElementById("btnNewGame")) {
       newGame.appendChild(newGameBtn);
       massage.innerHTML = text;
   }
}

function checkStatus(line, column, value) {
    if ( (matrixGame[line][0] == value && matrixGame[line][1] == value &&  
        matrixGame[line][2] == value) || (matrixGame[0][column] == value && 
        matrixGame[1][column] == value &&  matrixGame[2][column] == value) || 
        (matrixGame[0][0] == value && matrixGame[1][1] == value &&  
        matrixGame[2][2] == value) || (matrixGame[0][2] == value &&
        matrixGame[1][1] == value &&  matrixGame[2][0] == value)) {
        showWiner("Player " + value + " has Won!!<br>Winner Winner Chicken Dinner");
    }
}

function showSimbol(number1, number2, buttonId) {
    if (buttonId.textContent !== 'X' && buttonId.textContent !== 'O'){
        let mesage = document.getElementById("message");
        ++appearanceOrder;
        if (appearanceOrder % 2 !== 0) {
            buttonId.textContent = 'X';
            matrixGame[number1][number2] = 1;
            mesage.innerHTML = "It is O turn";
        } else {
            buttonId.textContent = 'O';
            matrixGame[number1][number2] = 2;
            mesage.innerHTML = "It is X turn";
        }
        checkStatus(number1, number2, matrixGame[number1][number2]);
    }
    if (appearanceOrder === 9) {
        showWiner("EQUALITY");
    }
}
