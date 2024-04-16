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
    let remuveGrid = document.getElementById("gridContainer");
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

function checkStatusX() {
    let sumOfMainDigX = 0, sumOfSecondDigX = 0;
    let sumOfMainDigO = 0, sumOfSecondDigO = 0;
    for (let i = 0; i < matrixGame.length; ++i) {
        let sumLineX = 0, sumColumnX = 0;
        let sumLineO = 0, sumColumnO = 0;
        for (let j = 0; j < matrixGame.length; ++j) {
            sumLineX += (matrixGame[i][j] === 1) ? 1 : 0;
            sumColumnX += (matrixGame[j][i] === 1) ? 1 : 0;
            sumLineO += (matrixGame[i][j] === 2) ? 1 : 0;
            sumColumnO += (matrixGame[j][i] === 2) ? 1 : 0;
        }
        sumOfMainDigX += (matrixGame[i][i] === 1) ? 1 : 0;
        sumOfMainDigO += (matrixGame[i][i] === 2) ? 1 : 0;
        sumOfSecondDigX += (matrixGame[i][matrixGame.length - 1 - i] === 1) ? 1 : 0;
        sumOfSecondDigO += (matrixGame[i][matrixGame.length - 1 - i] === 2) ? 1 : 0;
        if (sumLineX === 3 || sumColumnX === 3 || sumOfMainDigX === 3 || sumOfSecondDigX === 3) {
            showWiner("X has Won!!<br>" + "Winner Winner Chicken Dinner");
        } else if (sumLineO === 3 || sumColumnO === 3 || sumOfMainDigO === 3 || sumOfSecondDigO === 3) {
            showWiner("O has Won!!<br>" + "Winner Winner Chicken Dinner")
        }
    }
}

function showSimbol(number1, number2, buttonId) {
    if (buttonId.textContent !== 'X' && buttonId.textContent !== 'O') {
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
        checkStatusX();
        if (appearanceOrder === 9) {
            showWiner("EQUALITY");
        }
    }
}
