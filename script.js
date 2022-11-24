let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X"
let isgameover = false;
const resetBtn = document.querySelector('#reset');

//Function to change the turn
const changeTurn = () =>{
    return turn === "X" ? "0" : "X"
}

//check who wins
const checkWin = () =>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],        
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText != '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!"
            isgameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

//Game Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxText.innerText ===''){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }            
        }
    })
})

// add event listener to reset the game

resetBtn.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    gameOver.play();
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
})