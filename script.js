const turn = document.querySelector("h2");
const box1 = document.getElementById("one");
const box2 = document.getElementById("two");
const box3 = document.getElementById("three");
const box4 = document.getElementById("four");
const box5 = document.getElementById("five");
const box6 = document.getElementById("six");
const box7 = document.getElementById("seven");
const box8 = document.getElementById("eight");
const box9 = document.getElementById("nine");
const button = document.querySelector("button");  

function writeX() {
    if (turn.textContent == "X'S TURN") {
        if (this.textContent == 0) {
            this.textContent = "X";
            turn.textContent = "O'S TURN";
        }
    } else if (turn.textContent == "O'S TURN") {
        if (this.textContent == 0) {
            this.textContent = "O";
            turn.textContent = "X'S TURN";
        }       
    }
}

box1.addEventListener("click", writeX);
box2.addEventListener("click", writeX);
box3.addEventListener("click", writeX);
box4.addEventListener("click", writeX);
box5.addEventListener("click", writeX);
box6.addEventListener("click", writeX);
box7.addEventListener("click", writeX);
box8.addEventListener("click", writeX);
box9.addEventListener("click", writeX);

function reset() {
    box1.textContent = "";
    box2.textContent = "";
    box3.textContent = "";
    box4.textContent = "";
    box5.textContent = "";
    box6.textContent = "";
    box7.textContent = "";
    box8.textContent = "";
    box9.textContent = "";
}

button.addEventListener("click", reset)


function checkWinner() {
    if (box1.textContent == "X" && box2.textContent == "X" && box3.textContent == "X") {
        alert("X WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box4.textContent == "X" && box5.textContent == "X" && box6.textContent == "X") {
        alert("X WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box7.textContent == "X" && box8.textContent == "X" && box9.textContent == "X") {
        alert("X WINS!") 
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box1.textContent == "X" && box4.textContent == "X" && box7.textContent == "X") {
        alert("X WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box2.textContent == "X" && box5.textContent == "X" && box8.textContent == "X") {
        alert("X WINS!") 
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box3.textContent == "X" && box6.textContent == "X" && box9.textContent == "X") {
        alert("X WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    }else if (box1.textContent == "X" && box5.textContent == "X" && box9.textContent == "X") {
        alert("X WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box3.textContent == "X" && box5.textContent == "X" && box7.textContent == "X") {
        alert("X WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box1.textContent == "O" && box2.textContent == "O" && box3.textContent == "O") {
        alert("O WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box4.textContent == "O" && box5.textContent == "O" && box6.textContent == "O") {
        alert("O WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box7.textContent == "O" && box8.textContent == "O" && box9.textContent == "O") {
        alert("O WINS!") 
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box1.textContent == "O" && box4.textContent == "O" && box7.textContent == "O") {
        alert("O WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box2.textContent == "O" && box5.textContent == "O" && box8.textContent == "O") {
        alert("O WINS!") 
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box3.textContent == "O" && box6.textContent == "O" && box9.textContent == "O") {
        alert("O WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    }else if (box1.textContent == "O" && box5.textContent == "O" && box9.textContent == "O") {
        alert("O WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    } else if (box3.textContent == "O" && box5.textContent == "O" && box7.textContent == "O") {
        alert("O WINS!")
        box1.textContent = "";
        box2.textContent = "";
        box3.textContent = "";
        box4.textContent = "";
        box5.textContent = "";
        box6.textContent = "";
        box7.textContent = "";
        box8.textContent = "";
        box9.textContent = "";
    }
}

setInterval(checkWinner, 500);