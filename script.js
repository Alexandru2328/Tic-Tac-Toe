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

function checkStatus() {
    let sumOfMainDig = 0, sumOfSecondDig = 0;
    for (let i = 0; i < matrixGame.length; ++i) {
        let sumLine = 0, sumColumn = 0;
        for (let j = 0; j < matrixGame.length; ++j) {
           if (matrixGame[i][j] === 1) {
                ++sumLine;
           } else if (matrixGame[i][j] === 2) {
                --sumLine;
           }
           if (matrixGame[j][i] === 1) {
                ++sumColumn;
           } else if (matrixGame[j][i] === 2) {
                --sumColumn;
           }
        }
        if (matrixGame[i][i] === 1) {
            ++sumOfMainDig;
        } else if (matrixGame[i][i] === 2) {
            --sumOfMainDig;
        }
        if (matrixGame[i][matrixGame.length - 1 - i] === 1) {
            ++sumOfSecondDig;
        } else if (matrixGame[i][matrixGame.length - 1 - i] === 2) {
            --sumOfSecondDig;
        }
        if (sumLine === 3 || sumColumn === 3 || sumOfMainDig === 3 || 
            sumOfSecondDig === 3) {
            showWiner("X has Won!!<br>" + "Winner Winner Chicken Dinner");
        } else if (sumLine === -3 || sumColumn === -3 || sumOfMainDig === -3 ||
                   sumOfSecondDig === -3) {
            showWiner("O has Won!!<br>" + "Winner Winner Chicken Dinner")
        }
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
        checkStatus();
    }
    if (appearanceOrder === 9) {
        showWiner("EQUALITY");
    }
}
