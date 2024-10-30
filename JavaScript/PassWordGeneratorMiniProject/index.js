let inputSlider = document.querySelector("[data-lengthSlider]");
let lengthDisplay = document.querySelector("[data-lengthNumber]");
let passwordDisplay  =document.querySelector("[data-passwordDisplay]") ;
let copyBtn = document.querySelector("[data-copy]") ;
let copyMsg = document.querySelector("[data-copyMsg]") ;
let upperCaseCheck = document.querySelector("#uppercase") ;
let lowercaseCheck = document.querySelector("#lowercase") ;
let numbersCheck = document.querySelector("#numbers") ;
let symbolsCheck = document.querySelector("#symbols") ;
let indicator = document.querySelector("[data-indicator]") ;
let generateBtn = document.querySelector(".generateBtn") ;
let allCheckBox = document.querySelectorAll("input[type=checkbox]") ;
let symbols = '~`!@#$%^&*()-_=+[]\;,./{}|:"<>?' ;

let password ="" ;
let passwordLength = 10 ;
let checkCount = 0;
handleSlider() ;
// Set strength color to grey 
setIndicator("#ccc") ;



//Sets length display /password length
function handleSlider(){
    inputSlider.value = passwordLength  ;
    lengthDisplay.textContent = passwordLength ;
    const min = inputSlider.min ;
    const max = inputSlider.max ; 
    inputSlider.style.backgroundSize = ((passwordLength - min)*100/(max - min)) + "% 100%";
}

// Sets color of indicator
function setIndicator(color){
    indicator.style.backgroundColor = color ; 
    //shadow
    indicator.style.boxShadow = `2px 2px 5px 5px ${color}`;
}

// Sets random Integer(used in below functions)
function getInteger(min,max){
    return Math.floor(Math.random() * (max-min+1)) + min ;
}

//sets number
function generateNumber(){
    return getInteger(0,9) ;
}

//sets lowercase letter
function generateLower(){
    return String.fromCharCode(getInteger(97,122)) ;
}

//sets Uppercase letter
function genrateUpper(){
    return String.fromCharCode(getInteger(65,90)) ;
}

//sets symbol 
function generateSymbol(){
    const randnum = getInteger(0,symbols.length) ;
    return symbols.charAt(randnum) ;
}
function calcStrength(){
    let hasUpper = false ;
    let hasLower = false ;
    let hasNum =false ;
    let hasSym = false ;
    if(upperCaseCheck.checked) hasUpper = true ;
    if(lowercaseCheck.checked) hasLower = true ;
    if(numbersCheck.checked) hasNum = true ;
    if(symbolsCheck.checked) hasSym = true ;

    if(hasUpper && hasLower &&(hasNum || hasSym) && passwordLength >= 8){
        setIndicator('#0f0') ;
    } 
    else if((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6 ){
        setIndicator('#ff0') ;
    }
    else{
        setIndicator('#f00') ;
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

function handleCheckBoxChange(){
    checkCount = 0 ;
    allCheckBox.forEach((checkbox) =>{
        if(checkbox.checked){
            checkCount ++ ;
        }
    })
    //special condition
    if(passwordLength < checkCount){
        passwordLength = checkCount ;
        handleSlider() ;
    }
}

Array.from(allCheckBox).forEach( (checkbox) => {
    checkbox.addEventListener('change' , handleCheckBoxChange) ;
})


inputSlider.addEventListener('input' ,(e) => {
    passwordLength = e.target.value ;
    handleSlider() ;
})
 copyBtn.addEventListener('click' ,() =>{
    if(passwordDisplay.value){
        copyContent() ;
    }
 })


 generateBtn.addEventListener('click' ,() => {
    // None of the checkbox
    console.log("function start") ;
    if(checkCount <= 0 ) return ;
    console.log("allll");
    if(passwordLength < checkCount){
        passwordLength = checkCount ;
        handleSlider();
    }
    console.log("before main") ;

    //remove the old password 
    password = "" ;

    //let's put the stuff mentioned by checkboxes
    // if(upperCaseCheck.checked) password+= genrateUpper() ;
    // if(lowercaseCheck.checked) password+= generateLower() ;
    // if(numbersCheck.checked) password+= generateNumber() ;
    // if(symbolsCheck.checked) password+= generateSymbol() ;    

    //
    console.log("funcarr start");
    let funcarr =[] ;
    if(upperCaseCheck.checked){
        funcarr.push(genrateUpper) ;
    }
    if(lowercaseCheck.checked){
        funcarr.push(generateLower) ;
    }
    if(numbersCheck.checked){
        funcarr.push(generateNumber) ;
    }
    if(symbolsCheck.checked){
        funcarr.push(generateSymbol) ;
    }
    console.log("funcarr ended");

    console.log("compulsory") ;
    for(let i = 0 ;i<funcarr.length ; i++){
        password += funcarr[i]() ;
    }
    console.log("random") ;
    for(let i=0 ; i<(passwordLength - funcarr.length) ;i++ ){
        let randIndex = getInteger(0, funcarr.length-1) ;
        password += funcarr[randIndex]() ;
    }
    
    password = shufflePassword(Array.from(password)) ;
    passwordDisplay.value  = password ;


    calcStrength() ;

 })
 
 function shufflePassword(array){
    for(let i = array.length -1 ; i>0 ; i-- ){
        const j = Math.floor(Math.random() * (i+1)) ;
        const temp = array[i] ;
        array[i] = array[j] ;
        array[j] = temp ; 
    }
    let str = "" ;
    array.forEach((el) => (str += el));
    return str ; 
 }








