let flag1 = ' ';        //flag for r1c1
let flag2 = ' ';        //flag for r1c2
let flag3 = ' ';        //flag for r1c3
let flag4 = ' ';        //flag for r2c1
let flag5 = ' ';        //flag for r2c2
let flag6 = ' ';        //flag for r2c3
let flag7 = ' ';        //flag for r3c1
let flag8 = ' ';        //flag for r3c2
let flag9 = ' ';        //flag for r3c3
let playerA;
let playerB;
let currentPlayer;


function start() { 
    playerA = document.getElementById('PlayerA').value;
    playerB = document.getElementById('PlayerB').value;

    if (playerA == '') { 
        playerA = "Player A";
    }

    if (playerB == '') { 
        playerB = "Player B";
    }

    currentPlayer = playerA;

    document.getElementById('welcome').style.display = "none";
    document.getElementById('grid').style.display = "block";
    document.getElementById('btn1').style.display = "none";
    document.getElementById('btn2').style.display = "block";
    document.getElementById('turn').innerHTML = playerA+" your turn."
}

// function to reset the board when any player won
function reset() {
flag1 = ' ';       
flag2 = ' ';       
flag3 = ' ';       
flag4 = ' ';       
flag5 = ' ';       
flag6 = ' ';       
flag7 = ' ';       
flag8 = ' ';       
flag9 = ' ';       
currentPlayer = playerA;

    document.getElementById('r1c1').style.backgroundImage = "";
    document.getElementById('r1c2').style.backgroundImage = "";
    document.getElementById('r1c3').style.backgroundImage = "";
    document.getElementById('r2c1').style.backgroundImage = "";
    document.getElementById('r2c2').style.backgroundImage = "";
    document.getElementById('r2c3').style.backgroundImage = "";
    document.getElementById('r3c1').style.backgroundImage = "";
    document.getElementById('r3c2').style.backgroundImage = "";
    document.getElementById('r3c3').style.backgroundImage = "";

    document.getElementById('turn').innerHTML = playerA+" your turn";
}

function checkDraw()
{
    if (flag1 != ' ' && flag2 != ' ' && flag3 != ' ' && flag4 != ' ' && flag5 != ' ' && flag6 != ' ' && flag7 != ' ' && flag8 != ' ' && flag9 != ' ') {
        document.getElementById('turn').innerHTML = " Match draw🥹.Try Again!";
    }
}

function check() {
    // to check if player A won
    if ((flag1 == 'X' && flag2 == 'X' && flag3 == 'X') || (flag4 == 'X' && flag5 == 'X' && flag6 == 'X') || (flag7 == 'X' && flag8 == 'X' && flag9 == 'X') ||
        (flag1 == 'X' && flag4 == 'X' && flag7 == 'X') || (flag2 == 'X' && flag5 == 'X' && flag8 == 'X') || (flag3 == 'X' && flag6 == 'X' && flag9 == 'X') ||
        (flag1 == 'X' && flag5 == 'X' && flag9 == 'X') || (flag3 == 'X' && flag5 == 'X' && flag7 == 'X')) {
        document.getElementById('turn').innerHTML = playerA + " Won🎉";
    }

    // to check if player B won
    if ((flag1 == 'O' && flag2 == 'O' && flag3 == 'O') || (flag4 == 'O' && flag5 == 'O' && flag6 == 'O') || (flag7 == 'O' && flag8 == 'O' && flag9 == 'O') ||
        (flag1 == 'O' && flag4 == 'O' && flag7 == 'O') || (flag2 == 'O' && flag5 == 'O' && flag8 == 'O') || (flag3 == 'O' && flag6 == 'O' && flag9 == 'O') ||
        (flag1 == 'O' && flag5 == 'O' && flag9 == 'O') || (flag3 == 'O' && flag5 == 'O' && flag7 == 'O')) {
        document.getElementById('turn').innerHTML = playerB + " Won🎉";
    }
    }

    function r1c1() {
        if (flag1 != 'O' && flag1 != 'X') {
            if (currentPlayer == playerA) {
                document.getElementById('r1c1').style.backgroundImage = "url('../images/cancel.png')";
                currentPlayer = playerB;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag1 = 'X';
            }
            else {
                document.getElementById('r1c1').style.backgroundImage = "url('../images/letter-o.png')";
                currentPlayer = playerA;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag1 = 'O';
            }
        }
    }

    function r1c2() {
        if (flag2 != 'O' && flag2 != 'X') {
            if (currentPlayer == playerA) {
                document.getElementById('r1c2').style.backgroundImage = "url('../images/cancel.png')";
                currentPlayer = playerB;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag2 = 'X';
            }
            else {
                document.getElementById('r1c2').style.backgroundImage = "url('../images/letter-o.png')";
                currentPlayer = playerA;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag2 = 'O';
            }
        }

    }

    function r1c3() {
        if (flag3 != 'O' && flag3 != 'X') {
            if (currentPlayer == playerA) {
                document.getElementById('r1c3').style.backgroundImage = "url('../images/cancel.png')";
                currentPlayer = playerB;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag3 = 'X';
            }
            else {
                document.getElementById('r1c3').style.backgroundImage = "url('../images/letter-o.png')";
                currentPlayer = playerA;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag3 = 'O';
            }
        }

    }

    function r2c1() {
        if (flag4 != 'O' && flag4 != 'X') {
            if (currentPlayer == playerA) {
                document.getElementById('r2c1').style.backgroundImage = "url('../images/cancel.png')";
                currentPlayer = playerB;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag4 = 'X';
            }
            else {
                document.getElementById('r2c1').style.backgroundImage = "url('../images/letter-o.png')";
                currentPlayer = playerA;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag4 = 'O';
            }
        }

    }

    function r2c2() {

        if (flag5 != 'O' && flag5 != 'X') {
            if (currentPlayer == playerA) {
                document.getElementById('r2c2').style.backgroundImage = "url('../images/cancel.png')";
                currentPlayer = playerB;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag5 = 'X';
            }
            else {
                document.getElementById('r2c2').style.backgroundImage = "url('../images/letter-o.png')";
                currentPlayer = playerA;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag5 = 'O'
            }
        }
    }

    function r2c3() {
        if (flag6 != 'O' && flag6 != 'X') {
            if (currentPlayer == playerA) {
                document.getElementById('r2c3').style.backgroundImage = "url('../images/cancel.png')";
                currentPlayer = playerB;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag6 = 'X';
            }
            else {
                document.getElementById('r2c3').style.backgroundImage = "url('../images/letter-o.png')";
                currentPlayer = playerA;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag6 = 'O';
            }
        }

    }

    function r3c1() {
        if (flag7 != 'O' && flag7 != 'X') {
            if (currentPlayer == playerA) {
                document.getElementById('r3c1').style.backgroundImage = "url('../images/cancel.png')";
                currentPlayer = playerB;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag7 = 'X';
            }
            else {
                document.getElementById('r3c1').style.backgroundImage = "url('../images/letter-o.png')";
                currentPlayer = playerA;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag7 = 'O';
            }
        }

    }

    function r3c2() {
        if (flag8 != 'O' && flag8 != 'X') {
            if (currentPlayer == playerA) {
                document.getElementById('r3c2').style.backgroundImage = "url('../images/cancel.png')";
                currentPlayer = playerB;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag8 = 'X';
            }
            else {
                document.getElementById('r3c2').style.backgroundImage = "url('../images/letter-o.png')";
                currentPlayer = playerA;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag8 = 'O';
            }
        }

    }

    function r3c3() {
        if (flag9 != 'O' && flag9 != 'X') {
            if (currentPlayer == playerA) {
                document.getElementById('r3c3').style.backgroundImage = "url('../images/cancel.png')";
                currentPlayer = playerB;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag9 = 'X';
            }
            else {
                document.getElementById('r3c3').style.backgroundImage = "url('../images/letter-o.png')";
                currentPlayer = playerA;
                document.getElementById('turn').innerHTML = currentPlayer + " your turn."
                flag9 = 'O';
            }
        }
    }