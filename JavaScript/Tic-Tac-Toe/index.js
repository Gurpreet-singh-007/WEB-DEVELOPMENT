const box = document.querySelectorAll(".box") ;
const gameInfo  =document.querySelector(".game-info") ;
const newGameBtn = document.querySelector(".btn") ;


let currentPlayer ; 
let gameGrid ; 

const winningPositions =[
    [0,1,2],
    [,3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
] ;

//Function for intialising the game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","","",] ;
    //Emptying on ui
    box.forEach((box, index) =>{
        box.innerText = "" ;
        box.style.pointerEvents = "all" ;
        box.classList.remove("win") ;
    });
    newGameBtn.classList.remove("active") ;
    gameInfo.innerText = `Current Player - ${currentPlayer}` ;
}
initGame() ;

// Event listener for boxes
box.forEach((box, index) =>{
    box.addEventListener("click", () =>{
        handleClick(index) ;
    });
});


function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer ="O" ;
    }
    else{
        currentPlayer ="X";
    }
    gameInfo.innerText = `Current Player - ${currentPlayer}` ;
}

//Checks the number of filled boxes
let fillCount = 0 ; 

function checkGameOver(){
    let winner = "" ;

    winningPositions.forEach((positions) =>{
        if( (gameGrid[positions[0]] !== "" || gameGrid[positions[1]] !== "" || gameGrid[positions[2]] !== "") &&
        (gameGrid[positions[0]] === (gameGrid[positions[1]])) && (gameGrid[positions[1]] === (gameGrid[positions[2]])) ){
            if(gameGrid[positions[0]] === "X"){
                winner = "X";
            }
            else{
                winner = "O" ;
            }
            box.forEach((box) => {
                box.style.pointerEvents = "none" ;
            })
            box[positions[0]].classList.add("win") ;
            box[positions[1]].classList.add("win") ;
            box[positions[2]].classList.add("win") ;
        }
    })
    if(winner !== ""){
        gameInfo.innerHTML = `Winner - ${winner}` ;
        newGameBtn.classList.add("active") ;
        return ;
    }
    // gameGrid.forEach((box) =>{
        //     if(box !== ""){
            //         fillCount++ ;
            //     }
            // });

    fillCount++ ;
    if(fillCount === 9){
        gameInfo.innerText = "Game Tied" ;
        newGameBtn.classList.add("active");
        fillCount = 0 ;
    }
}



function handleClick(index){
    if(gameGrid[index] === ""){
        box[index].innerHTML = currentPlayer ;
        gameGrid[index] = currentPlayer ;
        box[index].style.pointerEvents = "none" ;
        //swaping turns
        swapTurn();
        //checks if someone wins or not
        checkGameOver();
        // newGameBtn.classList.add("active") ;
    }
}

newGameBtn.addEventListener("click" ,initGame) ;




