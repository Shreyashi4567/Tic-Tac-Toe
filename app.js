let allButtons = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset-game");
let newGame = document.querySelector("#new-game");
let msg = document.querySelector(".msg");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const disableButtons = () => {
    for (let box of allButtons) {
        box.disabled = true;
    }
}
const enableButtons = () => {
    for (let box of allButtons) {
        box.disabled = false;
        box.innerText = '';
    }
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        //We say allButtons because it is an array, 'button' is simply a component of this array:-
        let pos1Value = allButtons[pattern[0]].innerText;
        let pos2Value = allButtons[pattern[1]].innerText;
        let pos3Value = allButtons[pattern[2]].innerText;
        if (pos1Value != '' && pos2Value != '' && pos3Value != '') {
            if (pos1Value == pos2Value && pos2Value == pos3Value) {
                msg.innerText = `The winner of the game is '${pos1Value}'!`;
                disableButtons();
                msg.classList.remove("hide");
                return true;
            }
        }
    }
}

allButtons.forEach(button => {
    let originalHeight = button.style.height;
    let originalWidth = button.style.width;
    let originalBackground = button.style.backgroundColor;
    button.addEventListener ('mouseover', function() {
        button.style.cursor = 'pointer';
        button.style.height = '17vmin';
        button.style.width = '17vmin';
        button.style.backgroundColor = '#FFAFCC';
    });
    button.addEventListener ('mouseout', function() {
        button.style.height = originalHeight;
        button.style.width = originalWidth;
        button.style.backgroundColor = originalBackground;
    });
    button.addEventListener ('click', function () {
        //One - Way to do:-
        // count ++;
        // if (count % 2 == 0) {
        //     button.innerText = "O";
        //     button.disabled = "true";
        // } else {
        //     button.innerText = "X";
        //     button.disabled = "true";
        // }
        //Programmer OP Method:-
        if (turnO == true) {
            button.innerText = "O";
            turnO = false;
        }
        else {
            button.innerText = "X";
            turnO = true;
        }
        button.disabled = 'true';
        checkWinner();
    })

})

resetGame.addEventListener('mouseover', () => {
    resetGame.style.cursor = 'pointer';
})

resetGame.addEventListener('click', () => {
    startGame();
});

newGame.addEventListener('mouseover', () => {
    newGame.style.cursor = 'pointer';
})
newGame.addEventListener('click', () => {
    startGame();
});

function startGame() {
    enableButtons();
    msg.classList.add("hide");
}
