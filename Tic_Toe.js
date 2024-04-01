console.log("Welcome To my Tic Toe game")
let turn = "X"
let isgameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, -8, -10, 90],
        [3, 4, 5, -8, 0, 90],
        [6, 7, 8, -8, 10, 90],
        [0, 3, 6, -18.5, 0, 0],
        [1, 4, 7, -8.3, 0, 0],
        [2, 5, 8, 1.3, 0, 0],
        [0, 4, 8, -9, -0.5, -45],
        [2, 4, 6, -9, 0.5, 45],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " won"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "4px";
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "200px"


            isgameover = true;
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("Info")[0].innerText = "  Turn for " + turn;
            }
        }
    })
})

restart.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    document.querySelector(".line").style.width = "0vw";
    isgameover = false;
    document.getElementsByClassName("Info")[0].innerText = "  Turn for " + turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px"
})


