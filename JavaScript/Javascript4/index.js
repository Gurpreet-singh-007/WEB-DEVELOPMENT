//Function Declaration
function run(){
    console.log("hi");
}
run();

//Function hoisting is a process of moving function declaration in the top of the file.

//Named function assignment
let named = function walk(){
    console.log('walking');
}
named();
//Anonymas function assignment
let anony = function (){
    console.log('walking');
}
anony();

//Special Object(Argument in Function)
function sum(){
    let total = 0;
    for (let value of arguments){
        total = total + value ;
    }
    return total ;
}
console.log("sum: " , sum());

//Rest Operator(used for storing multiple varying parameters in an array)
function sum2(num , ...arg){
    console.log(arg);
}
sum2(1,2,3,4) ;

//Default Parameter(If there is no parameter passed at the time of function call, default parameters will be used to get an appropriate output.)
function simpleint(p,r=5,t){        //(default parameter for rate of interest is 5.)
    return p*(r/100)*t ; 
}
console.log(simpleint(100,5,10));

//Getter / Setter
let name1={
    fName : 'G',
    lName : 'S',
    get fullName(){
        return `${name1.fName} ${name1.lName}`;
    },
    set fullName(value){
        // if(typeof value != String){
        //     throw new Error ("You have not sent a string");
        // }
        let words =value.split(' ');
        this.fName = words[0];
        this.lName = words[1];
    }
}
name1.fullName = 'bt bt';

//Error Handling in js
try{
    name1.fullName = 'bte bt' ;
}
catch(e){
    alert(e) ;
}
console.log(name1.fullName);

//scope 

//Reducing an array
let arr2 = [1,2,3,4,5,6,7,8,9,10,11] ;
console.log('Sum of array [1,2,3,4,5,6,7,8,9,10,11] = ',arr2.reduce((accumulator, currentvalue) => accumulator+ currentvalue ,0 ) );















