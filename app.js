let cells = document.querySelectorAll('.row > div');
let player = "X"



for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}
function cellClicked() {
    event.target.textContent = player;
    {
        winner(player)

        if (player === "X") {
            player = "O";
        }
        else {
            player = "X";
        }

    }

}



function winner(player) {
    if (cells[0].textContent === player && cells[1].textContent === player && cells[2].textContent === player) {
        alert(player + " Wins!")
    }
    else if (cells[3].textContent === player && cells[4].textContent === player && cells[5].textContent === player) {
        alert(player + " Wins!"); reset()
    } else if (cells[6].textContent === player && cells[7].textContent === player && cells[8].textContent === player) {
        alert(player + " Wins!")
    } else if (cells[0].textContent === player && cells[3].textContent === player && cells[6].textContent === player) {
        alert(player + " Wins!")
    } else if (cells[1].textContent === player && cells[4].textContent === player && cells[7].textContent === player) {
        alert(player + " Wins!")
    } else if (cells[2].textContent === player && cells[5].textContent === player && cells[8].textContent === player) {
        alert(player + " Wins!")
    } else if (cells[0].textContent === player && cells[4].textContent === player && cells[8].textContent === player) {
        alert(player + " Wins!")
    } else if (cells[2].textContent === player && cells[4].textContent === player && cells[6].textContent === player) {
        alert(player + " Wins!")
    }
}
