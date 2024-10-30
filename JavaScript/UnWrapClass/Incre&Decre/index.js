let buttons = document.querySelectorAll('Button') ;
let countValue =document.getElementById("counter") ;
function Decrement(){
    let value = parseInt(countValue.innerText) ;
    value -= 1 ;
    countValue.innerText = value ;
}
function Increment(){
    let value = parseInt(countValue.innerText) ;
    value += 1 ;
    countValue.innerText = value ;
}